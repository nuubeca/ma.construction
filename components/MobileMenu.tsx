'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NavItem {
  href: string
  label: string
}

interface MobileMenuProps {
  items: NavItem[]
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Ouvrir le menu"
        className="lg:hidden cursor-pointer w-11 h-11 flex flex-col items-center justify-center gap-1.5 text-concrete-50"
      >
        <span className="block w-6 h-px bg-current" />
        <span className="block w-6 h-px bg-current" />
        <span className="block w-4 h-px bg-current ml-auto" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-ink"
            >
              <div className="grain absolute inset-0 pointer-events-none" />

              <div className="relative h-full flex flex-col">
                <div className="flex items-center justify-between px-5 py-4 border-b border-concrete-50/10">
                  <span className="font-anton text-xl uppercase text-concrete-50">
                    MA / Construction
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Fermer le menu"
                    className="cursor-pointer w-11 h-11 flex items-center justify-center text-concrete-50"
                  >
                    <span className="relative w-6 h-6 block">
                      <span className="absolute inset-x-0 top-1/2 h-px bg-current rotate-45" />
                      <span className="absolute inset-x-0 top-1/2 h-px bg-current -rotate-45" />
                    </span>
                  </button>
                </div>

                <nav className="flex-1 flex flex-col justify-center px-5 md:px-10">
                  <ul className="space-y-4 md:space-y-6">
                    {items.map((item, i) => (
                      <motion.li
                        key={item.href}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.2 + i * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-baseline justify-between font-anton uppercase text-5xl md:text-7xl tracking-tighter text-concrete-50 hover:text-safety transition-colors cursor-pointer"
                        >
                          <span>{item.label}</span>
                          <span className="text-xs tracking-[0.2em] text-concrete-500 font-sans normal-case">
                            0{i + 1}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="px-5 md:px-10 py-6 border-t border-concrete-50/10 flex items-center justify-between gap-4"
                >
                  <a
                    href="tel:18195601882"
                    className="cursor-pointer flex items-center gap-3 text-concrete-50 hover:text-safety transition-colors"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-concrete-400">
                      Appeler
                    </span>
                    <span className="font-anton text-lg">1·819·560·1882</span>
                  </a>
                  <span className="text-xs uppercase tracking-[0.2em] text-concrete-500">
                    Sherbrooke · QC
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
