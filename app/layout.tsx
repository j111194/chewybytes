import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "@/components/google-analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "PixelPlay Studios - Mobile Game Developer",
  description: "Independent mobile game developer creating playful, engaging experiences that fit in your pocket.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable}`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  )
}


import './globals.css'