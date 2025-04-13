"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Script from "next/script"

// 👇 TypeScript fix
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-5B8TG90N9W", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-5B8TG90N9W" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-5B8TG90N9W');
        `}
      </Script>
    </>
  )
}
