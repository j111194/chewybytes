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
import { SubscribeForm } from "@/components/subscribe-form"
import { getGameBySlug } from "@/lib/game-data"
import { notFound } from "next/navigation"

interface GamePageProps {
  params: {
    slug: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  // Get game data
  const game = getGameBySlug(params.slug)

  // If game not found, return 404
  if (!game) {
    notFound()
  }

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
            <div className="flex items-center gap-4">
              <Badge className="bg-orange text-white px-3 py-1.5 text-sm font-bold rounded-full">{game.tag}</Badge>
              {game.logo && (
                <Image
                  src={game.logo || "/placeholder.svg"}
                  alt={`${game.title} logo`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              )}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">{game.title}</h1>
            <p className="text-xl text-navy/70">{game.shortDescription}</p>

            <p className="text-lg text-navy/80">{game.description}</p>

            {game.isAvailable ? (
              <div className="flex flex-wrap gap-4">
                <Button className="btn-navy h-14 gap-2 px-6" asChild>
                  <Link href={game.storeLinks.appStore} target="_blank" rel="noopener noreferrer">
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
                  <Link href={game.storeLinks.googlePlay} target="_blank" rel="noopener noreferrer">
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
              <SubscribeForm gameTitle={game.title} className="max-w-md" />
            )}

            {game.isAvailable && (
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${
                        typeof game.rating === "number" && star <= game.rating
                          ? "fill-orange text-orange"
                          : "text-navy/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-base font-semibold text-navy">
                  {game.rating} • {game.reviewCount} Reviews
                </span>
              </div>
            )}
          </div>

          <div className="lg:w-1/2 relative">
            {game.detailVideo ? (
              <VideoPlayer
                thumbnailSrc={game.detailVideo.thumbnailSrc}
                thumbnailAlt={`${game.title} gameplay trailer thumbnail`}
                videoSrc={game.detailVideo.videoSrc}
                autoplay={game.detailVideo.autoplay}
              />
            ) : (
              <div className="aspect-video rounded-2xl overflow-hidden bg-navy/5 relative group shadow-smooth">
                <Image
                  src={game.screenshots[0]?.src || "/placeholder.svg?height=720&width=1280"}
                  alt={game.screenshots[0]?.alt || `${game.title} screenshot`}
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {game.features.map((feature, index) => (
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

          {game.videos && game.videos.length > 0 ? (
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
                  {game.screenshots.map((screenshot, index) => (
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
                  {game.videos.map((video, index) => (
                    <VideoPlayer
                      key={index}
                      thumbnailSrc={video.thumbnailSrc}
                      thumbnailAlt={video.title}
                      videoSrc={video.videoSrc}
                      autoplay={false}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {game.screenshots.map((screenshot, index) => (
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

        {/* Reviews Section - Only show if game has reviews and showReviews is true */}
        {game.showReviews && game.reviews.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">Player Reviews</h2>
              <Button variant="outline" className="btn-outline">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {game.reviews.map((review, index) => (
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
        )}

        {/* Download CTA */}
        <section className="rounded-2xl bg-navy/5 p-10 md:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              {game.isAvailable ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">
                    Ready to play {game.title}?
                  </h2>
                  <p className="text-xl text-navy/70">Download now and join thousands of players worldwide!</p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy">
                    Excited for {game.title}?
                  </h2>
                  <p className="text-xl text-navy/70">Subscribe to get notified when we launch!</p>
                </>
              )}
            </div>
            {game.isAvailable ? (
              <div className="flex flex-wrap gap-4">
                <Button className="btn-navy h-14 gap-2 px-6" asChild>
                  <Link href={game.storeLinks.appStore} target="_blank" rel="noopener noreferrer">
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
                  <Link href={game.storeLinks.googlePlay} target="_blank" rel="noopener noreferrer">
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
              <SubscribeForm gameTitle={game.title} className="md:min-w-[350px]" />
            )}
          </div>
        </section>
      </div>
    </GameLayout>
  )
}
