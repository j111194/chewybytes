"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { NavDropdown } from "@/components/nav-dropdown"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { SubscribeForm } from "@/components/subscribe-form"
import { submitContactForm } from "./actions"
import { games, getFeaturedGame } from "@/lib/game-data"

export default function HomePage() {
  // Control video autoplay for hero section
  const autoplayHeroVideo = true

  // Form states
  const [contactStatus, setContactStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [isSubmittingContact, setIsSubmittingContact] = useState(false)

  // Refs for form elements
  const contactFormRef = useRef<HTMLFormElement>(null)

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmittingContact(true)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)
      setContactStatus(result)

      // Reset form if successful
      if (result.success && contactFormRef.current) {
        contactFormRef.current.reset()
      }

      // Hide message after 5 seconds
      setTimeout(() => setContactStatus(null), 5000)
    } catch (error) {
      setContactStatus({ success: false, message: "An unexpected error occurred. Please try again." })
      setTimeout(() => setContactStatus(null), 5000)
    } finally {
      setIsSubmittingContact(false)
    }
  }

  // Find the featured game for the hero section
  const featuredGame = getFeaturedGame()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png" // or .png or whatever your file is
              alt="Chewy Bytess Logo"
              className="h-16 w-20000 rounded-xl object-contain"
            />
           <span className="text-xl font-extrabold text-navy"></span>
          </Link>

          <nav className="hidden lg:flex gap-8">
            <Link href="#" className="text-base font-semibold text-navy hover:text-orange transition-colors">
              Home
            </Link>
            <NavDropdown
              trigger="Games"
              items={games.map((game) => ({ label: game.title, href: `/games/${game.slug}` }))}
            />
            <Link href="#contact" className="text-base font-semibold text-navy hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>
          <div className="lg:hidden">
            <HamburgerMenu
              items={[
                { label: "Home", href: "/" },
                ...games.map((game) => ({ label: game.title, href: `/games/${game.slug}` })),
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section (Featured Game) */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-navy/5 to-white">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="flex flex-col gap-16 md:flex-row md:items-center">
              <div className="flex-1 space-y-8">
                <div className="inline-block rounded-lg bg-orange px-4 py-1.5 text-sm font-bold text-white">
                  {featuredGame.isAvailable ? "Latest Release" : "Coming Soon"}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
                  {featuredGame.title}
                </h1>
                <p className="text-xl text-navy/70">{featuredGame.shortDescription}</p>

                {featuredGame.isAvailable ? (
                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-navy h-14 gap-2 px-6" asChild>
                      <Link href={featuredGame.storeLinks.appStore} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.12 2.29-.84 3.46-.77 1.5.12 2.65.64 3.39 1.64-3.25 1.95-2.75 5.9.47 7.18-.57 1.82-1.71 3.59-3.4 5.13ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.26 2.01-1.16 4.07-3.74 4.25Z"
                          />
                        </svg>
                        App Store
                      </Link>
                    </Button>
                    <Button className="btn-orange h-14 gap-2 px-6" asChild>
                      <Link href={featuredGame.storeLinks.googlePlay} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                          <path
                            fill="currentColor"
                            d="m12.954 11.616 2.957-2.957L6.36 3.17c-.633-.342-1.226-.39-1.746-.016l8.34 8.462zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"
                          />
                        </svg>
                        Google Play
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <SubscribeForm className="max-w-md" gameTitle={featuredGame.title} />
                )}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] h-[560px] rounded-[3rem] border-8 border-navy overflow-hidden shadow-smooth transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute inset-0 bg-navy/5 flex items-center justify-center">
                    {featuredGame.heroVideo && autoplayHeroVideo ? (
                      <video autoPlay muted loop playsInline preload="auto" className="object-cover absolute inset-0 w-full h-full">
                        <source src={featuredGame.heroVideo.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <Button
                          size="icon"
                          className="h-20 w-20 rounded-full bg-orange text-white hover:bg-orange/90 transition-transform hover:scale-110 shadow-smooth z-10"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-10 w-10"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span className="sr-only">Play video</span>
                        </Button>
                        <Image
                          src={featuredGame.screenshots[0]?.src || "/placeholder.svg?height=560&width=280"}
                          alt={featuredGame.screenshots[0]?.alt || `${featuredGame.title} Screenshot`}
                          width={280}
                          height={560}
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid - Redesigned */}
        <section id="games" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Our Games</h2>
              <p className="text-xl text-navy/70 max-w-[700px]">
                Check out our collection of mobile games, each crafted with love and attention to detail.
              </p>
            </div>

            <div className="space-y-16">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-8 shadow-smooth"
                >
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-orange/10 flex items-center justify-center shadow-smooth overflow-hidden">
                      {game.appIcon ? (
                        <Image
                          src={game.appIcon || "/placeholder.svg"}
                          alt={`${game.title} app icon`}
                          width={120}
                          height={120}
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-6xl">{game.emoji}</div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-3/4 space-y-4 text-center md:text-left">
                    <div className="inline-block text-orange font-bold">{game.tag} Game</div>
                    <h3 className="text-3xl font-extrabold text-navy">{game.title}</h3>
                    <p className="text-navy/70">{game.description}</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <Link href={`/games/${game.slug}`}>
                        <Button variant="outline" className="btn-outline">
                          Learn More
                        </Button>
                      </Link>

                      {game.isAvailable ? (
                        <div className="flex gap-3">
                          <Link
                            href={game.storeLinks.appStore}
                            className="transition-transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg viewBox="0 0 120 40" width="120" height="40">
                              <path
                                d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013A13.215 13.215 0 0 0 5.517.19a6.665 6.665 0 0 0-1.9.627 6.438 6.438 0 0 0-1.62 1.18A6.258 6.258 0 0 0 .82 3.617 6.601 6.601 0 0 0 .195 5.52a12.993 12.993 0 0 0-.179 2.002c-.01.307-.01.615-.015.921V31.56c.005.31.006.61.015.921a12.992 12.992 0 0 0 .18 2.002 6.606 6.606 0 0 0 .624 1.905A6.258 6.258 0 0 0 1.998 38a6.274 6.274 0 0 0 1.618 1.179 6.7 6.7 0 0 0 1.901.63 13.455 13.455 0 0 0 2.004.177c.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.36 0 .724 0 1.084-.002.304 0 .617-.004.922-.01a13.279 13.279 0 0 0 2-.178 6.804 6.804 0 0 0 1.908-.63A6.277 6.277 0 0 0 117.666 38a6.395 6.395 0 0 0 1.182-1.614 6.604 6.604 0 0 0 .62-1.905 13.506 13.506 0 0 0 .183-2.002c.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.507 13.507 0 0 0-.183-2.003 6.618 6.618 0 0 0-.62-1.903 6.466 6.466 0 0 0-2.798-2.8 6.768 6.768 0 0 0-1.908-.627 13.044 13.044 0 0 0-2-.176c-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002z"
                                fill="#A6A6A6"
                              />
                              <path d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.687 12.687 0 0 1-1.87-.164 5.884 5.884 0 0 1-1.656-.548 5.406 5.406 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.414 12.414 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662 5.373 5.373 0 0 1 1.015-1.398 5.565 5.565 0 0 1 1.402-1.023 5.823 5.823 0 0 1 1.653-.544A12.586 12.586 0 0 1 7.543.887l.902-.012h102.769l.913.013a12.385 12.385 0 0 1 1.858.162 5.938 5.938 0 0 1 1.671.548 5.594 5.594 0 0 1 2.415 2.42 5.763 5.763 0 0 1 .535 1.649 12.995 12.995 0 0 1 .174 1.887c.003.283.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93a12.731 12.731 0 0 1-.17 1.853 5.739 5.739 0 0 1-.54 1.67 5.48 5.48 0 0 1-1.016 1.386 5.413 5.413 0 0 1-1.4 1.022 5.862 5.862 0 0 1-1.668.55 12.542 12.542 0 0 1-1.869.163c-.293.007-.6.011-.897.011l-1.084.002z" />
                              <g fill="#fff">
                                <path d="M24.769 20.3a4.949 4.949 0 0 1 2.356-4.151 5.066 5.066 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.348-.491 8.269 1.361 10.976.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.962 10.962 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4zM22.037 12.21a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.636 4.636 0 0 0-1.144 3.36 4.1 4.1 0 0 0 3.237-1.53z" />
                              </g>
                              <g fill="#fff">
                                <path d="M42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039zm-4.243-1.55h3.752l-1.85-5.446h-.051zM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM65.125 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.86V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.393-1.197 2.393-3.046zM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987s-2.521.757-2.521 1.858c0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667zM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137a5.808 5.808 0 0 0 .611-.043v1.463a5.104 5.104 0 0 1-1.032.086c-1.833 0-2.548-.689-2.548-2.445v-5.189h-1.316v-1.472h1.316V19.3zM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638zm6.695 0c0-1.954-.895-3.108-2.401-3.108s-2.4 1.162-2.4 3.108c0 1.962.894 3.106 2.4 3.106s2.401-1.144 2.401-3.106zM96.186 21.442h1.773v1.541h.043a2.16 2.16 0 0 1 2.177-1.635 2.866 2.866 0 0 1 .637.069v1.738a2.598 2.598 0 0 0-.835-.112 1.873 1.873 0 0 0-1.937 2.083v5.37h-1.858zM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.19-4.682 2.506 0 4.08 1.72 4.08 4.466v.637h-6.394v.112a2.358 2.358 0 0 0 2.436 2.564 2.048 2.048 0 0 0 2.09-1.273zm-6.282-2.702h4.526a2.177 2.177 0 0 0-2.22-2.298 2.292 2.292 0 0 0-2.306 2.298z" />
                              </g>
                            </svg>
                          </Link>
                          <Link
                            href={game.storeLinks.googlePlay}
                            className="transition-transform hover:scale-105"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg viewBox="0 0 135 40" width="120" height="40">
                              <path
                                d="M130 40H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5h125c2.8 0 5 2.2 5 5v30c0 2.8-2.2 5-5 5z"
                                fill="#a6a6a6"
                              />
                              <path
                                d="M130 .8c2.3 0 4.2 1.9 4.2 4.2v30c0 2.3-1.9 4.2-4.2 4.2H5C2.7 39.2.8 37.3.8 35V5C.8 2.7 2.7.8 5 .8h125m0-.8H5C2.2 0 0 2.3 0 5v30c0 2.8 2.2 5 5 5h125c2.8 0 5-2.2 5-5V5c0-2.7-2.2-5-5-5z"
                                fill="#a6a6a6"
                              />
                              <path
                                d="M47.4 10.2c0 .8-.2 1.5-.7 2-.5.6-1.2.9-2.1.9-.8 0-1.6-.3-2.1-.9-.6-.6-.9-1.3-.9-2.2 0-.9.3-1.6.9-2.2.6-.6 1.3-.9 2.1-.9.4 0 .8.1 1.2.3.4.2.7.4.9.7l-.5.5c-.4-.5-.9-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.4-.7 1-.7 1.7s.2 1.3.7 1.7c.5.4 1 .7 1.6.7.7 0 1.2-.2 1.7-.7.3-.3.5-.7.5-1.2h-2.2v-.8h2.9v.4zM52 7.7h-2.7v1.9h2.5v.7h-2.5v1.9H52v.8h-3.5V7H52v.7zM55.3 13h-.8V7.7h-1.7V7H57v.7h-1.7V13zM59.9 13V7h.8v6h-.8zM64.1 13h-.8V7.7h-1.7V7h4.1v.7H64V13zM73.6 12.2c-.6.6-1.3.9-2.2.9-.9 0-1.6-.3-2.2-.9-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.6 1.3-.9 2.2-.9.9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2zm-3.8-.5c.4.4 1 .7 1.6.7.6 0 1.2-.2 1.6-.7.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.4-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.4.4-.7 1-.7 1.7s.2 1.3.7 1.7zM75.6 13V7h.9l2.9 4.7V7h.8v6h-.8l-3.1-4.9V13h-.7z"
                                fill="#fff"
                                stroke="#fff"
                                strokeWidth=".2"
                              />
                              <path
                                d="M68.1 21.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-9.3-6.8c-2.4 0-4.3 1.8-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3s4.3-1.8 4.3-4.3c0-2.6-1.9-4.3-4.3-4.3zm0 6.8c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.4 1 2.4 2.6 0 1.5-1.1 2.6-2.4 2.6zm-11.1-5.5v1.8H52c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8s2.1-4.8 4.7-4.8c1.4 0 2.5.6 3.3 1.3l1.3-1.3c-1.1-1-2.5-1.8-4.5-1.8-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm45.4 1.4c-.4-1-1.4-2.7-3.6-2.7s-4 1.7-4 4.3c0 2.4 1.8 4.3 4.2 4.3 1.9 0 3.1-1.2 3.5-1.9l-1.4-1c-.5.7-1.1 1.2-2.1 1.2s-1.6-.4-2.1-1.3l5.7-2.4-.2-.5zm-5.8 1.4c0-1.6 1.3-2.5 2.2-2.5.7 0 1.4.4 1.6.9l-3.8 1.6zM82.6 30h1.9V17.5h-1.9V30zm-3-7.3c-.5-.5-1.3-1-2.3-1-2.1 0-4.1 1.9-4.1 4.3s1.9 4.2 4.1 4.2c1 0 1.8-.5 2.2-1h.1v.6c0 1.6-.9 2.5-2.3 2.5-1.1 0-1.9-.8-2.1-1.5l-1.6.7c.5 1.1 1.7 2.5 3.8 2.5 2.2 0 4-1.3 4-4.4V22h-1.8v.7zm-2.2 5.9c-1.3 0-2.4-1.1-2.4-2.6s1.1-2.6 2.4-2.6c1.3 0 2.3 1.1 2.3 2.6s-1 2.6-2.3 2.6zm24.4-11.1h-4.5V30h1.9v-4.7h2.6c2.1 0 4.1-1.5 4.1-3.9s-2-3.9-4.1-3.9zm.1 6h-2.7v-4.3h2.7c1.4 0 2.2 1.2 2.2 2.1-.1 1.1-.9 2.2-2.2 2.2zm11.5-1.8c-1.4 0-2.8.6-3.3 1.9l1.7.7c.4-.7 1-.9 1.7-.9 1 0 1.9.6 2 1.6v.1c-.3-.2-1.1-.5-1.9-.5-1.8 0-3.6 1-3.6 2.8 0 1.7 1.5 2.8 3.1 2.8 1.3 0 1.9-.6 2.4-1.2h.1v1h1.8v-4.8c-.2-2.2-1.9-3.5-4-3.5zm-.2 6.9c-.6 0-1.5-.3-1.5-1.1 0-1 1.1-1.3 2-1.3.8 0 1.2.2 1.7.4-.2 1.2-1.2 2-2.2 2zm10.5-6.6l-2.1 5.4h-.1l-2.2-5.4h-2l3.3 7.6-1.9 4.2h1.9l5.1-11.8h-2zm-16.8 8h1.9V17.5h-1.9V30z"
                                fill="#fff"
                              />
                              <linearGradient
                                id="a"
                                gradientUnits="userSpaceOnUse"
                                x1="21.8"
                                y1="33.29"
                                x2="5.02"
                                y2="16.51"
                                gradientTransform="matrix(1 0 0 -1 0 42)"
                              >
                                <stop offset="0" stopColor="#00a0ff" />
                                <stop offset=".01" stopColor="#00a1ff" />
                                <stop offset=".26" stopColor="#00beff" />
                                <stop offset=".51" stopColor="#00d2ff" />
                                <stop offset=".76" stopColor="#00dfff" />
                                <stop offset="1" stopColor="#00e3ff" />
                              </linearGradient>
                              <path
                                d="M10.4 7.5c-.3.3-.4.8-.4 1.4V31c0 .6.2 1.1.5 1.4l.1.1L23 20.1v-.2L10.4 7.5z"
                                fill="url(#a)"
                              />
                              <linearGradient
                                id="b"
                                gradientUnits="userSpaceOnUse"
                                x1="33.83"
                                y1="21.999"
                                x2="9.64"
                                y2="21.999"
                                gradientTransform="matrix(1 0 0 -1 0 42)"
                              >
                                <stop offset="0" stopColor="#ffe000" />
                                <stop offset=".41" stopColor="#ffbd00" />
                                <stop offset=".78" stopColor="#ffa500" />
                                <stop offset="1" stopColor="#ff9c00" />
                              </linearGradient>
                              <path
                                d="M27 24.3l-4.1-4.1v-.3l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.7z"
                                fill="url(#b)"
                              />
                              <linearGradient
                                id="c"
                                gradientUnits="userSpaceOnUse"
                                x1="24.83"
                                y1="19.64"
                                x2="2.07"
                                y2="-3.13"
                                gradientTransform="matrix(1 0 0 -1 0 42)"
                              >
                                <stop offset="0" stopColor="#ff3a44" />
                                <stop offset="1" stopColor="#c31162" />
                              </linearGradient>
                              <path d="M27.1 24.2L22.9 20 10.4 32.5c.5.5 1.2.5 2.1.1l14.6-8.4" fill="url(#c)" />
                              <linearGradient
                                id="d"
                                gradientUnits="userSpaceOnUse"
                                x1="7.3"
                                y1="41.48"
                                x2="17.46"
                                y2="31.32"
                                gradientTransform="matrix(1 0 0 -1 0 42)"
                              >
                                <stop offset="0" stopColor="#32a071" />
                                <stop offset=".07" stopColor="#2da771" />
                                <stop offset=".48" stopColor="#15cf74" />
                                <stop offset=".8" stopColor="#06e775" />
                                <stop offset="1" stopColor="#00f076" />
                              </linearGradient>
                              <path d="M27.1 15.8L12.5 7.5c-.9-.5-1.6-.4-2.1.1L22.9 20l4.2-4.2z" fill="url(#d)" />
                              <path
                                d="M27 24.1l-14.5 8.2c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0L27 24.1z"
                                opacity=".2"
                              />
                              <path
                                d="M10.4 32.3c-.3-.3-.4-.8-.4-1.4v.1c0 .6.2 1.1.5 1.4v-.1h-.1zM32 21.3l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.4.9-1 1.3z"
                                opacity=".12"
                              />
                              <path
                                d="M12.5 7.6L32 18.7c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L12.5 7.5c-1.4-.8-2.5-.2-2.5 1.4V9c0-1.5 1.1-2.2 2.5-1.4z"
                                fill="#fff"
                                opacity=".25"
                              />
                            </svg>
                          </Link>
                        </div>
                      ) : (
                        <div className="text-navy/50 text-sm font-medium py-2">
                          Coming soon to App Store and Google Play
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="w-full py-20 md:py-32 bg-navy/5">
          <div className="container px-4 md:px-6 mx-auto max-w-6xl">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Get In Touch</h2>
              <p className="text-xl text-navy/70 max-w-[700px]">
                Have a question, feedback, or just want to say hello? Drop us a message!
              </p>
            </div>
            <div className="mx-auto max-w-xl">
              <Card className="border-0 shadow-smooth rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <form ref={contactFormRef} onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <Input
                          name="name"
                          placeholder="Name"
                          className="h-14 rounded-xl border-navy/20 focus-visible:ring-orange"
                          required
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          placeholder="Email"
                          type="email"
                          className="h-14 rounded-xl border-navy/20 focus-visible:ring-orange"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        className="h-14 rounded-xl border-navy/20 focus-visible:ring-orange"
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your message"
                        className="min-h-[150px] rounded-xl border-navy/20 focus-visible:ring-orange"
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-orange w-full h-14 text-base" disabled={isSubmittingContact}>
                      {isSubmittingContact ? "Sending..." : "Send Message"}
                    </Button>
                    {contactStatus && (
                      <div
                        className={`p-3 rounded-lg text-center ${
                          contactStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {contactStatus.message}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Deep Navy */}
      <footer className="w-full py-8 md:py-12 bg-navy text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <p className="text-center text-white/70 md:text-left">
            © {new Date().getFullYear()} PixelPlay Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/70 font-medium hover:text-orange transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/70 font-medium hover:text-orange transition-colors">Terms</Link>
            <Link href="#contact" className="text-white/70 font-medium hover:text-orange transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
