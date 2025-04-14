"use client"

import Link from "next/link"
import { useEffect } from "react"
import { NavDropdown } from "@/components/nav-dropdown"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { games } from "@/lib/game-data"

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl flex h-20 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Chewy Bytes Logo" className="h-16 rounded-xl object-contain" />
            <span className="text-xl font-extrabold text-navy"></span>
          </Link>

          <nav className="hidden lg:flex gap-8">
            <Link href="/" className="text-base font-semibold text-navy hover:text-orange transition-colors">Home</Link>
            <NavDropdown trigger="Games" items={games.map((game) => ({ label: game.title, href: `/games/${game.slug}` }))} />
            <Link href="#contact" className="text-base font-semibold text-navy hover:text-orange transition-colors">Contact</Link>
          </nav>
          <div className="lg:hidden">
            <HamburgerMenu
              items={[{ label: "Home", href: "/" }, ...games.map((game) => ({ label: game.title, href: `/games/${game.slug}` })), { label: "Contact", href: "#contact" }]}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 py-20 md:py-32">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold text-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-navy/80">
            <p>This privacy policy describes how Chewy Bytes ("We", "Us", or "Our") collects, processes, shares, stores, and discloses personal data ("Data") and other data generated through Our services ("Services"). By using Our Services, you consent to this policy, which is part of Our <Link href="/terms">Terms of Use</Link>.</p>

            <h2>This policy informs on:</h2>
            <ul>
              <li>What Information is collected from you</li>
              <li>How this Information is used</li>
              <li>With whom the Information is shared</li>
              <li>How you can access, update, or delete your Information or consent</li>
            </ul>

            <p>If you have any questions or concerns, please see the “Contact” section at the end.</p>

            <h2>User Age Limits</h2>
            <p>Our Services are not intended for children under 16. If needed, an age gate will be used. If you are under 16, please do not provide personal data; have a parent or guardian contact us instead. Under GDPR, children under 16 must have parental consent for data processing.</p>

            <h2>What Information do we collect</h2>
            <h3>Information you provide us</h3>
            <p>Includes interactions via social media, contact forms, support tools (e.g. email, tickets), and any direct submissions.</p>

            <h3>Information collected automatically</h3>
            <ul>
              <li>Identifiers: Ad ID, IP, unique service IDs</li>
              <li>Device info: OS version, browser, memory, battery, carrier, connection type</li>
              <li>Campaign info: Ad views, clicks, installs, and in-app activity</li>
            </ul>
            <p>No personal identifiers (e.g. name, email) are collected automatically.</p>

            <h3>Third-party Information collection</h3>
            <p>We may use third-party services (see below). These may include APIs and platform integrations (e.g. Apple Game Center, Google Play Games). Please review their policies before sharing data.</p>

            <h2>Ad Networks</h2>
            <ul>
              <li><a href="https://unity3d.com/legal/privacy-policy">Unity Ads</a></li>
              <li><a href="https://developers.is.com/ironsource-mobile/unity/ironsource-mobile-privacy-policy/">IronSource</a></li>
              <li><a href="https://safety.google/privacy/ads-and-data/">Google Ads</a></li>
              <li><a href="https://support.google.com/admob/answer/6128543?hl=en&ref_topic=2745287">AdMob</a></li>
              <li><a href="https://www.digitalturbine.com/privacy-policy/">AdColony</a></li>
              <li><a href="https://www.applovin.com/privacy/">AppLovin</a></li>
              <li><a href="https://answers.chartboost.com/en-us/articles/200780269">Chartboost</a></li>
              <li><a href="https://dev.tapjoy.com/en/legal/Privacy-Policy">Tapjoy</a></li>
            </ul>

            <h2>Analytics and Services</h2>
            <ul>
              <li><a href="https://unity3d.com/legal/privacy-policy">Unity Analytics</a></li>
              <li><a href="https://policies.google.com/privacy">Google Tools / Analytics</a></li>
              <li><a href="https://firebase.google.com/support/privacy">Firebase</a></li>
              <li><a href="https://policies.google.com/technologies/partner-sites">Google Play</a></li>
              <li><a href="https://developers.google.com/games/services/terms">Google Play Games</a></li>
              <li><a href="https://www.apple.com/legal/privacy/en-ww/">Apple</a></li>
              <li><a href="https://www.apple.com/legal/privacy/data/en/game-center/">Apple Game Center</a></li>
            </ul>

            <h2>Purpose of Collection</h2>
            <p>Collected data is used to provide and improve our Services, support functionality, enable purchases, serve contextual ads, perform analytics, enforce security, comply with laws, and deliver support or marketing.</p>

            <h2>Opting Out</h2>
            <p>You can opt out of interest-based ads via your mobile device settings (“Limit Ad Tracking” or “Opt-out of Interest-Based Ads”). This does not disable all ads. Analytics opt-out may be offered in the app.</p>

            <h2>Push Notifications</h2>
            <p>Some Services may send push notifications (game updates, promotions, etc.). You can disable these in your device settings.</p>

            <h2>Security</h2>
            <p>We strive to protect your data, but no method of transmission or storage is 100% secure. We use commercially acceptable means to safeguard your data but cannot guarantee absolute security.</p>

            <h2>Access to Your Information and Deletion</h2>
            <p>We retain data only as needed for business and legal purposes. You may request access or correction. Contact us for such requests.</p>

            <h2>Changes to the Privacy Policy</h2>
            <p>This policy may be updated as needed for user protection and regulatory compliance. Please review it periodically.</p>

            <p className="mt-10 text-sm text-navy/50">Last update: 31 March 2023</p>

            <h2>Contact</h2>
            <p>Email: <a href="mailto:support@chewybytes.nl">support@chewybytes.nl</a></p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 md:py-12 bg-navy text-white">
        <div className="container px-4 md:px-6 mx-auto max-w-6xl flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
          <p className="text-center text-white/70 md:text-left">
            © {new Date().getFullYear()} Chewy Bytes. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/70 font-medium hover:text-orange transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/70 font-medium hover:text-orange transition-colors">Terms</Link>
            <Link href="#contact" className="text-white/70 font-medium hover:text-orange transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
