"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface VideoPlayerProps {
  thumbnailSrc: string
  thumbnailAlt: string
  videoSrc?: string
  autoplay?: boolean
  className?: string
}

export function VideoPlayer({
  thumbnailSrc,
  thumbnailAlt,
  videoSrc = "/placeholder-video.mp4",
  autoplay = false,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`aspect-video rounded-2xl overflow-hidden bg-navy/5 relative group shadow-smooth ${className}`}>
      {isPlaying ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full object-cover"
          autoPlay={autoplay}
          controls={isPlaying}
          onEnded={() => setIsPlaying(false)}
        />
      ) : (
        <>
          <Image
            src={thumbnailSrc || "/placeholder.svg"}
            alt={thumbnailAlt}
            width={1280}
            height={720}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              size="icon"
              className="h-20 w-20 rounded-full bg-orange text-white hover:bg-orange/90 transition-transform group-hover:scale-110 shadow-smooth"
              onClick={togglePlay}
            >
              <Play className="h-10 w-10" />
              <span className="sr-only">Play video</span>
            </Button>
          </div>
        </>
      )}
      {isPlaying && (
        <Button
          size="icon"
          className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-opacity opacity-0 group-hover:opacity-100"
          onClick={togglePlay}
        >
          <Pause className="h-5 w-5" />
          <span className="sr-only">Pause video</span>
        </Button>
      )}
    </div>
  )
}
