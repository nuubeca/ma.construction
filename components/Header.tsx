'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const navItems = [
  { href: '/services/construction', label: 'Construction' },
  { href: '/services/renovation', label: 'Rénovation' },
  { href: '/services/excavation', label: 'Excavation' },
  { href: '/services/materiaux-en-vrac', label: 'Vrac' },
  { href: '/bureau', label: 'Bureau' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? 'bg-ink/85 backdrop-blur-md border-b border-concrete-50/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="px-5 md:px-10 py-4 md:py-5 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-baseline gap-2 cursor-pointer"
          aria-label="Construction Michael Aubut — accueil"
        >
          <span className="font-anton text-xl md:text-2xl tracking-tight uppercase leading-none text-concrete-50 group-hover:text-safety transition-colors duration-200">
            MA / Construction
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 bg-safety translate-y-[-2px]" />
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-[13px] uppercase tracking-[0.18em] text-concrete-200">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="cursor-pointer relative inline-block py-1 hover:text-concrete-50 transition-colors duration-200"
              >
                <span>{item.label}</span>
                <span className="absolute left-0 right-0 bottom-0 h-px bg-safety scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:18195601882"
            className="cursor-pointer px-4 py-2.5 bg-safety hover:bg-safety-600 text-ink font-anton uppercase tracking-wider text-sm leading-none transition-colors duration-200"
          >
            1·819·560·1882
          </a>
        </div>

        <MobileMenu items={navItems} />
      </nav>
    </motion.header>
  )
}
