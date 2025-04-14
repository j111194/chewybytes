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
          <h1 className="text-4xl font-extrabold text-navy mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none text-navy/80">
            <p>These Terms of Use ("Terms") govern your use of the services provided by Chewy Bytes ("Company"). By using our services, you agree to these Terms. If you are under 18, you confirm that your legal guardian has reviewed and agreed to these Terms.</p>

            <p>Use of our services is also subject to our <Link href="/privacy">Privacy Policy</Link>, which outlines how we collect and use personal data.</p>

            <h2>Links to Other Websites</h2>
            <p>Our Services may include links to third-party websites. We are not responsible for their content or privacy practices. Please review their terms before use.</p>

            <h2>Intellectual Property</h2>
            <p>All content, including text, graphics, videos, and code, is owned by the Company or licensors and is protected by law. You may not reproduce, adapt, or use this content without permission.</p>

            <h2>Availability and Maintenance</h2>
            <p>We aim for maximum availability but do not guarantee uninterrupted access. We may update or discontinue services at any time.</p>

            <h2>Prohibited Conduct</h2>
            <ul>
              <li>Do not use our services unlawfully or harmfully.</li>
              <li>Do not impersonate others or misrepresent your affiliation.</li>
              <li>Do not harass or threaten others.</li>
              <li>Do not spread viruses or harmful code.</li>
              <li>Do not reverse-engineer or misuse our systems.</li>
              <li>Do not use bots or automated tools to access our services.</li>
              <li>Do not violate laws or regulations.</li>
            </ul>

            <h2>User Content</h2>
            <p>By submitting content, you grant us a license to use and distribute it. Do not submit content that infringes on rights or contains harmful or offensive material.</p>

            <h2>Limitation of Liability</h2>
            <p>We are not liable for indirect, incidental, or consequential damages. This includes data loss, business interruption, or missed profits, except in cases of gross negligence or intent. We are not liable in events of force majeure (e.g., internet failure, natural disasters).</p>

            <h2>Indemnification</h2>
            <p>You agree to indemnify and defend the Company from any claims related to your use of our services or your violation of these Terms.</p>

            <h2>Disclaimer: "AS IS" and "AS AVAILABLE"</h2>
            <p>Our services are provided without warranties. We do not guarantee that the services will meet your expectations, be error-free, or be available at all times. Your use is at your own risk.</p>

            <h2>Governing Law</h2>
            <p>These Terms are governed by Dutch law. Your use of our services may also be subject to local regulations.</p>

            <h2>Termination</h2>
            <p>We may terminate or suspend your access at any time, without notice, if you breach these Terms.</p>

            <h2>Dispute Resolution</h2>
            <p>If you have any dispute with us, please try to resolve it informally first by contacting us.</p>

            <h2>Severability and Waiver</h2>
            <p>If any provision is found invalid, the rest will remain effective. Failure to enforce a right does not waive future enforcement of that right.</p>

            <h2>Translation</h2>
            <p>If these Terms are translated, the English version prevails in case of conflict.</p>

            <h2>Changes to These Terms</h2>
            <p>We may update these Terms periodically. Please review them when using our services.</p>

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
