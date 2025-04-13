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

export default function DontPopBobPage() {
  // Mock data for reviews - in a real app, this would come from an API
  const reviews = [
    {
      name: "Riley T.",
      rating: 5,
      text: "Don't Pop Bob is hilarious and challenging! My kids and I can't stop playing it. The balloon physics are spot on!",
      source: "App Store",
      date: "April 3, 2023",
    },
    {
      name: "Morgan P.",
      rating: 5,
      text: "Such a creative concept! I love the different environments and obstacles. The sound effects make me laugh every time.",
      source: "Google Play",
      date: "March 18, 2023",
    },
    {
      name: "Casey J.",
      rating: 4,
      text: "Super fun game with adorable characters. Would give 5 stars if there were more customization options for Bob.",
      source: "App Store",
      date: "February 5, 2023",
    },
  ]

  // Mock data for screenshots - in a real app, these would be actual game screenshots
  const screenshots = [
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Don't Pop Bob gameplay in the park level",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Don't Pop Bob navigating through a factory",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Don't Pop Bob character selection screen",
    },
    {
      src: "/placeholder.svg?height=600&width=300",
      alt: "Don't Pop Bob power-up collection",
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
              <Badge className="bg-orange text-white px-3 py-1.5 text-sm font-bold rounded-full mb-4">Casual</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">
                Don't Pop Bob
              </h1>
              <p className="text-xl text-navy/70 mt-4">Guide Bob the balloon through a world of dangers!</p>
            </div>

            <p className="text-lg text-navy/80">
              Don't Pop Bob is a delightful casual game where you guide Bob, an adventurous balloon, through a series of
              increasingly challenging environments filled with sharp objects and hazards. Tap and hold to float higher,
              release to descend, and navigate carefully to keep Bob intact!
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
              <span className="text-base font-semibold text-navy">4.9 • 15K+ Reviews</span>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy/5 relative group shadow-smooth">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Don't Pop Bob gameplay trailer thumbnail"
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
                title: "Simple Controls",
                description: "Intuitive tap-and-hold mechanics that anyone can pick up in seconds.",
                icon: "👆",
              },
              {
                title: "50+ Levels",
                description: "Navigate through over 50 uniquely designed levels across 5 different worlds.",
                icon: "🌈",
              },
              {
                title: "Character Skins",
                description: "Unlock different balloon characters, each with their own special abilities.",
                icon: "🎈",
              },
              {
                title: "Physics-Based Gameplay",
                description: "Realistic balloon physics make every playthrough a unique experience.",
                icon: "🔄",
              },
              {
                title: "Family Friendly",
                description: "Suitable for all ages with no violence or inappropriate content.",
                icon: "👨‍👩‍👧‍👦",
              },
              {
                title: "Offline Play",
                description: "No internet connection required - play anywhere, anytime!",
                icon: "🔌",
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
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Help Bob survive!</h2>
              <p className="text-xl text-navy/70">Download now and see how far you can guide Bob without popping!</p>
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
