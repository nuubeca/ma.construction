'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface PageIntroProps {
  eyebrow: string
  title: string
  imageSrc: string
  alt: string
  caption?: string
  align?: 'left' | 'right'
}

export default function PageIntro({
  eyebrow,
  title,
  imageSrc,
  alt,
  caption,
  align = 'left',
}: PageIntroProps) {
  const ref = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])

  return (
    <section
      ref={ref}
      className="relative w-full h-[80svh] min-h-[520px] overflow-hidden bg-ink"
    >
      <motion.div
        style={prefersReduced ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/85" />
      <div className="grain absolute inset-0 pointer-events-none" />

      <div
        className={`relative z-10 h-full px-5 md:px-10 pb-12 md:pb-20 flex flex-col justify-end ${
          align === 'right' ? 'items-end text-right' : ''
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-safety" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-concrete-100"
          >
            {eyebrow}
          </motion.span>
        </div>

        <h1 className="font-anton uppercase text-colossal text-concrete-50 max-w-[14ch] tracking-tightest leading-[0.9]">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {title}
            </motion.span>
          </span>
        </h1>

        {caption && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-concrete-200 max-w-xl leading-relaxed text-lg"
          >
            {caption}
          </motion.p>
        )}
      </div>
    </section>
  )
}
