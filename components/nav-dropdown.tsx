"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavDropdownProps {
  trigger: React.ReactNode
  items: {
    label: string
    href: string
  }[]
}

export function NavDropdown({ trigger, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef} onMouseEnter={() => setIsOpen(true)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-base font-semibold text-navy hover:text-orange transition-colors"
      >
        {trigger}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-xl bg-white shadow-smooth ring-1 ring-black/5 focus:outline-none">
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-navy hover:bg-orange/5 hover:text-orange"
                // Don't close the dropdown when clicking a link
                onClick={(e) => e.stopPropagation()}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
