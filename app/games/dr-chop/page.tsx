"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft } from "lucide-react"
import GameLayout from "@/components/game-layout"
import { VideoPlayer } from "@/components/video-player"

export default function DrChopPage() {
  // Control video autoplay
  const autoplayVideo = false

  // Mock data for reviews - in a real app, this would come from an API
  const reviews = [
    {
      name: "Alex M.",
      rating: 5,
      text: "This game is incredibly addictive! The slicing mechanics are so satisfying and the progression system keeps me coming back for more.",
      source: "App Store",
      date: "March 15, 2023",
    },
    {
      name: "Jamie L.",
      rating: 4,
      text: "Super fun game that's perfect for quick play sessions. The only reason it's not 5 stars is because I wish there were more levels!",
      source: "Google Play",
      date: "February 22, 2023",
    },
    {
      name: "Taylor K.",
      rating: 5,
      text: "The physics in this game are amazing. I love how different objects react differently when you slice them. Great attention to detail!",
      source: "App Store",
      date: "January 10, 2023",
    },
  ]

  // Mock data for screenshots - in a real app, these would be actual game screenshots
  const screenshots = [
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Dr. Chop gameplay showing fruit slicing",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Dr. Chop special power-up activation",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Dr. Chop boss battle screen",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Dr. Chop character customization screen",
    },
  ]

  // Mock data for videos - set to empty array to test the condition
  const videos = [
    // Empty for now to test the condition
  ]

  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <GameLayout>
      <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto max-w-6xl">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center text-base font-semibold text-navy hover:text-orange transition-colors mb-8"
        >
          <ChevronLeft className="mr-1 h-5 w-5" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2 space-y-8">
            <div>
              <Badge className="bg-orange text-white px-3 py-1.5 text-sm font-bold rounded-full mb-4">Action</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">Dr. Chop</h1>
              <p className="text-xl text-navy/70 mt-4">Slice, dice, and chop your way to victory!</p>
            </div>

            <p className="text-lg text-navy/80">
              Dr. Chop is a fast-paced slicing game where you play as the titular doctor who has a peculiar way of
              solving problems—chopping them in half! With precise swipes and strategic timing, slice through waves of
              objects, avoid hazards, and rack up combos for high scores.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-navy h-14 gap-2 px-6">
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.12 2.29-.84 3.46-.77 1.5.12 2.65.64 3.39 1.64-3.25 1.95-2.75 5.9.47 7.18-.57 1.82-1.71 3.59-3.4 5.13ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.26 2.01-1.16 4.07-3.74 4.25Z"
                  />
                </svg>
                App Store
              </Button>
              <Button className="btn-orange h-14 gap-2 px-6">
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                  <path
                    fill="currentColor"
                    d="m12.954 11.616 2.957-2.957L6.36 3.17c-.633-.342-1.226-.39-1.746-.016l8.34 8.462zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"
                  />
                </svg>
                Google Play
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-orange text-orange" />
                ))}
              </div>
              <span className="text-base font-semibold text-navy">4.8 • 10K+ Reviews</span>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <VideoPlayer
              thumbnailSrc="/placeholder.svg?height=720&width=1280"
              thumbnailAlt="Dr. Chop gameplay trailer thumbnail"
              videoSrc="/placeholder-video.mp4"
              autoplay={autoplayVideo}
            />
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Slicing",
                description: "Swipe with precision to slice objects perfectly in half for maximum points.",
                icon: "🔪",
              },
              {
                title: "120+ Levels",
                description: "Progress through over 120 increasingly challenging levels across 6 unique environments.",
                icon: "🌍",
              },
              {
                title: "Power-ups",
                description: "Collect and activate special power-ups like time slow, multi-slice, and mega chop.",
                icon: "⚡",
              },
              {
                title: "Boss Battles",
                description: "Face off against epic bosses that require special slicing strategies to defeat.",
                icon: "👹",
              },
              {
                title: "Daily Challenges",
                description: "Return daily for special challenges with unique rewards and leaderboard positions.",
                icon: "🏆",
              },
              {
                title: "Character Customization",
                description: "Unlock and equip various outfits and slicing tools to personalize your Dr. Chop.",
                icon: "👨‍⚕️",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-white rounded-2xl shadow-smooth hover:shadow-lg transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-xl mb-3 text-navy">{feature.title}</h3>
                      <p className="text-navy/70">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots & Video Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-8">Gallery</h2>

          {videos && videos.length > 0 ? (
            <Tabs defaultValue="screenshots" className="w-full">
              <TabsList className="mb-8 bg-navy/5 p-1 rounded-full">
                <TabsTrigger
                  value="screenshots"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-smooth"
                >
                  Screenshots
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-navy data-[state=active]:shadow-smooth"
                >
                  Videos
                </TabsTrigger>
              </TabsList>
              <TabsContent value="screenshots">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="aspect-[9/16] rounded-2xl overflow-hidden border-0 shadow-smooth hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        width={300}
                        height={600}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="videos">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <VideoPlayer
                    thumbnailSrc="/placeholder.svg?height=720&width=1280"
                    thumbnailAlt="Dr. Chop gameplay video thumbnail"
                    videoSrc="/placeholder-video.mp4"
                    autoplay={false}
                  />
                  <VideoPlayer
                    thumbnailSrc="/placeholder.svg?height=720&width=1280"
                    thumbnailAlt="Dr. Chop gameplay video thumbnail"
                    videoSrc="/placeholder-video.mp4"
                    autoplay={false}
                  />
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="aspect-[9/16] rounded-2xl overflow-hidden border-0 shadow-smooth hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <Image
                    src={screenshot.src || "/placeholder.svg"}
                    alt={screenshot.alt}
                    width={300}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Reviews Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Player Reviews</h2>
            <Button variant="outline" className="btn-outline">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-white rounded-2xl shadow-smooth hover:shadow-lg transition-all"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? "fill-orange text-orange" : "text-navy/20"}`}
                        />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-navy border-navy/20 font-medium">
                      {review.source}
                    </Badge>
                  </div>
                  <p className="text-navy/80 mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between text-sm text-navy/60">
                    <span className="font-medium">{review.name}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section className="rounded-2xl bg-navy/5 p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Ready to start chopping?</h2>
              <p className="text-xl text-navy/70">
                Download Dr. Chop now and slice your way to the top of the leaderboards!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-navy h-14 gap-2 px-6">
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                  <path
                    fill="currentColor"
                    d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.12 2.29-.84 3.46-.77 1.5.12 2.65.64 3.39 1.64-3.25 1.95-2.75 5.9.47 7.18-.57 1.82-1.71 3.59-3.4 5.13ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.26 2.01-1.16 4.07-3.74 4.25Z"
                  />
                </svg>
                App Store
              </Button>
              <Button className="btn-orange h-14 gap-2 px-6">
                <svg viewBox="0 0 24 24" width="24" height="24" className="mr-2">
                  <path
                    fill="currentColor"
                    d="m12.954 11.616 2.957-2.957L6.36 3.17c-.633-.342-1.226-.39-1.746-.016l8.34 8.462zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"
                  />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GameLayout>
  )
}
