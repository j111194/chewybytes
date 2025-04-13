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
            {/* Paste your entire privacy content here. For brevity we add a placeholder: */}
            <p>
              This privacy policy is a document that describes how Chewy Bytes (as defined in this policy as “We”, “Us” or “Our”) collects, processes, shares, stores, transmits and discloses both personal data (“Data” or “Information”) and data generated in Our services...
            </p>
            <p>[These Terms of Use (the “Terms”) govern your access to and use of Our services (hereinafter referred to as our “Services”) developed by Chewy Bytes (the “Company”) and govern the agreement between you (“You”) and the Company. Please read these Terms carefully before using Our Services. By using Our Services, you acknowledge and consent to the Terms. If you accept these Terms and Conditions, you represent that you are age 18 or older (or the minimum age of your applicable jurisdiction). If you are between the ages of 16 and 17 or otherwise do not have the authority to enter into agreements such as these, you represent that your legal guardian, or a holder of parental responsibility, has reviewed and agreed to these Terms and Conditions.


Your access to and use of the Service is also conditioned on your acceptance

of and compliance with the Privacy Policy of the Company. Our Privacy Policy

describes Our policies and procedures on the collection, use and disclosure of

Your personal information when you use the Services. Please read Our Privacy Policy carefully before using Our Services.


Links to Other Websites  

Our Service may contain links to third-party web sites or services that are

not owned or controlled by the Company.


The Company has no control over, and assumes no responsibility for, the

content, privacy policies, or practices of any third party web sites or

services. You further acknowledge and agree that the Company shall not be

responsible or liable, directly or indirectly, for any damage or loss caused

or alleged to be caused by or in connection with the use of or reliance on any

such content, goods or services available on or through any such web sites or

services.


We strongly advise You to read the terms and conditions and privacy policies

of any third-party web sites or services that You visit.


Intellectual Property

The Services and its content, including but not limited to text, graphics, images, videos, and code, are owned by the Company or its licensors and are protected by intellectual property laws. You may not use the Services or its content

 Availability and maintenance
Company uses its best efforts to have the Services available at all times but makes no guarantees about uninterrupted availability or termination/discontinuation of the Services.

Maintenance can take place at any time, even if this may negatively impact the availability of the service.

The Company may at any time adapt or terminate Services. Your feedback and suggestions are welcome but ultimately the Company decides which adaptations to carry out (or not).


Prohibited Conduct

You agree not to:

Use Our Services for any unlawful purpose or in any manner that could damage, disable, overburden, or impair Our Services or its servers or related to third-parties.

Impersonate any person or entity or falsely state or misrepresent your affiliation with any person or entity.

Use Our Services to harass, threaten, or intimidate any other user, person or entity.

Transmit any viruses, worms or other harmful code.

Interfere with the operation of Our Services or any other user’s use of Our Services.

Modify, adapt, sublicense, translate, sell, reverse engineer, or otherwise exploit any portion of Our Services without the Company’s express written consent.

Use any automated means, including bots, spiders, or crawlers, to access, interact with or use Our Services.

Violate any applicable laws or regulations.


User Content

Services may include features that allow users to create, upload, or share content. By submitting content to the Services, you grant Company a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, modify, and adapt, publish, translate, create derivative works from, distribute, perform, and display your content in any media formats and through any media channels.

You agree not to: Submit or share content that infringes any third-party intellectual property rights, including copyrights, trademarks, trade secrets or patents, contains any defamatory, obscene, or offensive material or is harmful in any possible way.



Limitation of Liability

To the maximum extent permissible under applicable law, the Company shall not be liable for any special, indirect, incidental, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, intangible losses, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use Our Services, third-party software and/or third-party hardware used with Our Services, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Except in case of intentional misconduct or gross negligence, Company shall not be liable for the use of the service or any damages in connection therewith. In case of force majeure the Company is never required to compensate damages suffered by you. Force majeure includes among others disruptions or unavailability of the internet, telecommunication infrastructure, power interruptions, riots, traffic jams, strikes, company disruptions, interruptions in supply, fires and floods.

Company is in no event liable for indirect damages, consequential damages, lost profits, missed savings or damages through interruption.



You agree to indemnify, defend, and hold the Company harmless from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including, but not limited to, reasonable attorneys’ fees) arising out of or in connection with your use of Our Services to your violation of these Terms,


"AS IS" and "AS AVAILABLE" Disclaimer  

The Services are provided to You "AS IS" and "AS AVAILABLE" and with all faults

and defects without warranty of any kind. To the maximum extent permitted

under applicable law, the Company, on its own behalf and on behalf of its

Affiliates and its and their respective licensors and service providers,

expressly disclaims all warranties, whether express, implied, statutory or

otherwise, with respect to the Services, including all implied warranties of

merchantability, fitness for a particular purpose, title and non-infringement,

and warranties that may arise out of course of dealing, course of performance,

usage or trade practice. Without limitation to the foregoing, the Company

provides no warranty or undertaking, and makes no representation of any kind

that the Service will meet Your requirements, achieve any intended results, be

compatible or work with any other software, applications, systems or services,

operate without interruption, meet any performance or reliability standards or

be error free or that any errors or defects can or will be corrected.


Without limiting the foregoing, neither the Company nor any of the company's

provider makes any representation or warranty of any kind, express or implied:

(i) as to the operation or availability of the Service, or the information,

content, and materials or products included thereon; (ii) that the Service

will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or

currency of any information or content provided through the Service; or (iv)

that the Service, its servers, the content, or e-mails sent from or on behalf

of the Company are free of viruses, scripts, trojan horses, worms, malware,

timebombs or other harmful components.


Some jurisdictions do not allow the exclusion of certain types of warranties

or limitations on applicable statutory rights of a consumer, so some or all of

the above exclusions and limitations may not apply to You. But in such a case

the exclusions and limitations set forth in this section shall be applied to

the greatest extent enforceable under applicable law.


Governing Law  

The laws of the Netherlands, excluding its conflicts of law rules, shall govern

this Terms and Your use of the Service. Your use of the Services may also

be subject to other local, state, national, or international laws.



Termination 

We may terminate or suspend Your access immediately, without prior notice or

liability, for any reason whatsoever, including without limitation if You

breach these Terms and Conditions.


Upon termination, Your right to use the Service will cease immediately.


Disputes Resolution

If You have any concern or dispute about the Services, You agree to first try

to resolve the dispute informally by contacting the Company.


If any provision of these Terms is held to be unenforceable or invalid, such

provision will be changed and interpreted to accomplish the objectives of such

provision to the greatest extent possible under applicable law and the

remaining provisions will continue in full force and effect.


Except as provided herein, the failure to exercise a right or to require

performance of an obligation under these Terms shall not effect a party's

ability to exercise such right or require such performance at any time

thereafter nor shall the waiver of a breach constitute a waiver of any

subsequent breach.


Translation Interpretation

These Terms and Conditions may have been translated if We have made them

available to You on our Service. You agree that the original English text

shall prevail in the case of a dispute.


Changes to the Terms of Use

Occasionally and whenever necessary, in order to protect users and comply with the regulations, at Our sole discretion, We reserve the right to update Our Terms. To obtain the latest information, we therefore recommend that you review Our Terms of Use whenever you use Our Services.

Last update 31 March 2023


Contact

support@chewybytes.nl]</p>
            <p className="mt-10 text-sm text-navy/50">Last update: 31 March 2023</p>
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
