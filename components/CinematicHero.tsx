'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowDown } from 'lucide-react'

interface CinematicHeroProps {
  videoSrc?: string
  posterSrc: string
  alt: string
}

export default function CinematicHero({ videoSrc, posterSrc, alt }: CinematicHeroProps) {
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={ref}
      className="relative isolate w-full h-[100svh] min-h-[640px] overflow-hidden bg-ink"
    >
      <motion.div
        style={prefersReduced ? undefined : { y: mediaY, scale: mediaScale }}
        className="absolute inset-0"
      >
        {/* Mobile: image only (autoplay unreliable, native play button collides with title) */}
        <Image
          src={posterSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${videoSrc ? 'md:hidden' : ''}`}
        />
        {/* Desktop: looping muted video */}
        {videoSrc && (
          <video
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />
        )}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
      <div className="grain absolute inset-0 pointer-events-none" />

      <motion.div
        style={prefersReduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col justify-end px-5 md:px-10 pb-12 md:pb-20"
      >
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="block w-10 h-px bg-safety" />
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-concrete-100"
          >
            Sherbrooke · Estrie · Québec · Depuis 2014
          </motion.span>
        </div>

        <h1 className="font-anton uppercase text-mega text-concrete-50 max-w-[14ch]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Construction
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Michael <span className="text-safety">Aubut</span>
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-8 md:mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12"
        >
          <p className="text-lg md:text-xl text-concrete-100 max-w-md leading-snug">
            Qualité et expertise pour la satisfaction de nos clients depuis 10 ans.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="cursor-pointer group inline-flex items-center gap-3 px-6 py-4 bg-safety hover:bg-safety-600 text-ink font-anton uppercase tracking-wider text-sm transition-colors duration-200"
            >
              Soumission gratuite
              <span className="block w-4 h-px bg-current group-hover:w-6 transition-all duration-300" />
            </Link>
            <a
              href="tel:18195601882"
              className="cursor-pointer text-concrete-50 font-anton uppercase tracking-wider text-sm border-b border-concrete-50/40 hover:border-safety hover:text-safety transition-colors py-1"
            >
              Appeler
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="hidden md:flex items-center gap-3 mt-16 text-concrete-300"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={1.5} />
          <span className="eyebrow">Faire défiler</span>
        </motion.div>
      </motion.div>

      <div className="absolute top-24 right-5 md:top-28 md:right-10 z-10 hidden md:block">
        <div className="text-right">
          <p className="eyebrow text-concrete-200">10 +</p>
          <p className="font-anton uppercase text-concrete-50 text-sm tracking-wider mt-1">
            Années
          </p>
        </div>
      </div>
    </section>
  )
}
