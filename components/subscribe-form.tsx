"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions"

interface SubscribeFormProps {
  gameTitle?: string
  className?: string
}

export function SubscribeForm({ gameTitle, className = "" }: SubscribeFormProps) {
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const result = await subscribeToNewsletter({ email })
      setStatus(result)

      // Reset form if successful
      if (result.success && formRef.current) {
        formRef.current.reset()
      }

      // Hide message after 5 seconds
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      setStatus({ success: false, message: "An unexpected error occurred. Please try again." })
      setTimeout(() => setStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-smooth ${className}`}>
      <h3 className="text-lg font-bold text-navy mb-3">
        {gameTitle ? `Get notified when ${gameTitle} launches!` : "Get notified when we launch!"}
      </h3>
      <form ref={formRef} onSubmit={handleSubmit} className="flex gap-2">
        <Input
          name="email"
          placeholder="Enter your email"
          className="h-14 rounded-xl border-navy/20 focus-visible:ring-orange"
          required
          type="email"
        />
        <Button type="submit" className="btn-orange h-14 whitespace-nowrap" disabled={isSubmitting}>
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      {status && (
        <div
          className={`mt-3 p-2 rounded-lg text-sm ${
            status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  )
}
