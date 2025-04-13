"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface HamburgerMenuProps {
  items: {
    label: string
    href: string
  }[]
}

export function HamburgerMenu({ items }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center justify-center text-navy hover:text-orange transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-0">
        <div className="flex flex-col h-full bg-white">
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-orange"></div>
              <span className="text-lg font-extrabold text-navy">Chewy Bytes</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-navy hover:text-orange transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto py-6">
            <nav className="flex flex-col gap-2 px-6">
              {items.map((item, index) => (
                <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg font-semibold text-navy hover:text-orange hover:bg-orange/5"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-6 border-t">
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-orange w-full">Contact Me</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
