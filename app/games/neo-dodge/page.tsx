"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, Play } from "lucide-react"
import GameLayout from "@/components/game-layout"

export default function NeoDodgePage() {
  // Mock data for reviews - in a real app, this would come from an API
  const reviews = [
    {
      name: "Jordan H.",
      rating: 5,
      text: "NeoDodge is the perfect blend of retro and modern. The neon visuals are stunning and the gameplay is addictively challenging!",
      source: "App Store",
      date: "May 12, 2023",
    },
    {
      name: "Quinn R.",
      rating: 4,
      text: "Love the synthwave soundtrack and the responsive controls. Would be perfect with more ship customization options.",
      source: "Google Play",
      date: "April 29, 2023",
    },
    {
      name: "Avery M.",
      rating: 5,
      text: "This game is a masterpiece of minimalist design. The difficulty curve is perfect and keeps me coming back for more.",
      source: "App Store",
      date: "March 17, 2023",
    },
  ]

  // Mock data for screenshots - in a real app, these would be actual game screenshots
  const screenshots = [
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "NeoDodge gameplay showing neon obstacles",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "NeoDodge power-up activation",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "NeoDodge ship selection screen",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "NeoDodge high score leaderboard",
    },
  ]

  // Mock data for videos - set to empty array to test the condition
  const videos = []

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
              <Badge className="bg-orange text-white px-3 py-1.5 text-sm font-bold rounded-full mb-4">Arcade</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">NeoDodge</h1>
              <p className="text-xl text-navy/70 mt-4">Navigate the neon grid, survive the digital storm!</p>
            </div>

            <p className="text-lg text-navy/80">
              NeoDodge is a high-octane arcade game set in a retro-futuristic digital world. Control your ship with
              precision as you navigate through an endless stream of neon obstacles. With each level, the speed
              increases and the patterns become more complex. How long can you survive in this synthwave-inspired
              challenge?
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="btn-navy h-14 gap-2 px-6">
                <Image src="/placeholder.svg?height=24&width=24" alt="Apple App Store" width={24} height={24} />
                App Store
              </Button>
              <Button className="btn-orange h-14 gap-2 px-6">
                <Image src="/placeholder.svg?height=24&width=24" alt="Google Play Store" width={24} height={24} />
                Google Play
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-orange text-orange" />
                ))}
              </div>
              <span className="text-base font-semibold text-navy">4.7 • 8K+ Reviews</span>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy/5 relative group shadow-smooth">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="NeoDodge gameplay trailer thumbnail"
                width={1280}
                height={720}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-20 w-20 rounded-full bg-orange text-white hover:bg-orange/90 transition-transform group-hover:scale-110 shadow-smooth"
                >
                  <Play className="h-10 w-10" />
                  <span className="sr-only">Play trailer</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Endless Gameplay",
                description: "No two runs are the same with procedurally generated obstacle patterns.",
                icon: "🔄",
              },
              {
                title: "Stunning Visuals",
                description: "Immerse yourself in a neon-soaked, synthwave-inspired visual experience.",
                icon: "✨",
              },
              {
                title: "Original Soundtrack",
                description: "Pulse-pounding synthwave tracks that adapt to your gameplay intensity.",
                icon: "🎵",
              },
              {
                title: "Multiple Ships",
                description: "Unlock and pilot different ships, each with unique handling and special abilities.",
                icon: "🚀",
              },
              {
                title: "Global Leaderboards",
                description: "Compete with players worldwide to claim the top spot on the leaderboards.",
                icon: "🏆",
              },
              {
                title: "Achievement System",
                description: "Complete challenges to unlock achievements and earn special rewards.",
                icon: "🎯",
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
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="aspect-video rounded-2xl overflow-hidden bg-navy/5 relative group shadow-smooth"
                    >
                      <Image
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Game video thumbnail"
                        width={1280}
                        height={720}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="icon"
                          className="h-16 w-16 rounded-full bg-orange text-white hover:bg-orange/90 transition-transform group-hover:scale-110"
                        >
                          <Play className="h-8 w-8" />
                          <span className="sr-only">Play video</span>
                        </Button>
                      </div>
                    </div>
                  ))}
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
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Enter the neon grid!</h2>
              <p className="text-xl text-navy/70">
                Download NeoDodge now and test your reflexes in this synthwave challenge!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-navy h-14 gap-2 px-6">
                <Image src="/placeholder.svg?height=24&width=24" alt="Apple App Store" width={24} height={24} />
                App Store
              </Button>
              <Button className="btn-orange h-14 gap-2 px-6">
                <Image src="/placeholder.svg?height=24&width=24" alt="Google Play Store" width={24} height={24} />
                Google Play
              </Button>
            </div>
          </div>
        </section>
      </div>
    </GameLayout>
  )
}
