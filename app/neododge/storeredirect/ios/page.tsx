"use client"

import { useEffect } from "react"

export default function GamePage() {
  useEffect(() => {
    window.location.href = "https://your-exact-url.com"
  }, [])

  return null
}
