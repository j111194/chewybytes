"use client"

import { useState } from "react"
import Link from "next/link"
import { GamepadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavDropdownProps {
  items: {
    label: string
    href: string
  }[]
}

export function MobileNavDropdown({ items }: MobileNavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="flex flex-col items-center justify-center text-navy/70 hover:text-orange transition-colors">
          <GamepadIcon className="h-5 w-5" />
          <span className="text-xs font-medium mt-1">Games</span>
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto rounded-t-2xl border-0 shadow-smooth">
        <div className="py-6">
          <h3 className="text-xl font-bold text-navy mb-4">Games</h3>
          <div className="grid gap-2">
            {items.map((item, index) => (
              <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-navy hover:text-orange hover:bg-orange/5 font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
