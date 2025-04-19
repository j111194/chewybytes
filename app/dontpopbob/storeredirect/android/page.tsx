"use client"

import { useEffect } from "react"

export default function GamePage() {
  useEffect(() => {
    window.location.href = "https://play.google.com/store/apps/details?id=com.chewybytes.dontpopbob"
  }, [])

  return null
}
