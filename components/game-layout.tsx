"use client"

import { useEffect } from "react"
import type { ReactNode } from "react"
import Link from "next/link"
import { NavDropdown } from "./nav-dropdown"
import { HamburgerMenu } from "./hamburger-menu"

interface GameLayoutProps {
  children: ReactNode
}

export default function GameLayout({ children }: GameLayoutProps) {
  const gameItems = [
    { label: "Dr. Chop", href: "/games/dr-chop" },
    { label: "Don't Pop Bob", href: "/games/dont-pop-bob" },
    { label: "NeoDodge", href: "/games/neo-dodge" },
  ]

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Dr. Chop", href: "/games/dr-chop" },
    { label: "Don't Pop Bob", href: "/games/dont-pop-bob" },
    { label: "NeoDodge", href: "/games/neo-dodge" },
    { label: "Contact", href: "/#contact" },
  ]

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            <Link href="/" className="text-base font-semibold text-navy hover:text-orange transition-colors">
              Home
            </Link>
            <NavDropdown trigger="Games" items={gameItems} />
            <Link href="/#contact" className="text-base font-semibold text-navy hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>
          <div className="lg:hidden">
            <HamburgerMenu items={menuItems} />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

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
