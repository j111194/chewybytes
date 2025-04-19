"use client"

import { useEffect } from "react"

export default function GamePage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor

    const isAndroid = /android/i.test(userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent)

    if (isIOS) {
      window.location.href = "https://apps.apple.com/us/app/neododge/id6448055557"
    } else if (isAndroid) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.chewybytes.neododge"
    } else {
      // Fallback for desktop or unknown devices
      window.location.href = "https://chewybytes.nl"
    }
  }, [])

  return null
}
