'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900 sm:text-xl dark:text-zinc-50">
          Badhon<span className="text-indigo-600">Byte</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-200 dark:bg-zinc-50 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-200 dark:bg-zinc-50 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-5 bg-zinc-900 transition-all duration-200 dark:bg-zinc-50 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'max-h-64 border-t border-zinc-200 dark:border-zinc-800' : 'max-h-0'
        }`}
      >
        <nav className="bg-white px-4 pb-4 pt-2 dark:bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg py-3 pl-3 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
