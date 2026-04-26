'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { useRef, type ReactNode } from 'react'

interface SlowParallaxProps {
  src: string
  alt: string
  height?: string
  intensity?: number
  overlay?: number
  priority?: boolean
  children?: ReactNode
  className?: string
}

export default function SlowParallax({
  src,
  alt,
  height = 'min-h-[80vh]',
  intensity = 0.25,
  overlay = 0.5,
  priority = false,
  children,
  className = '',
}: SlowParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${intensity * 100}%`])
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-ink ${height} ${className}`}
    >
      <motion.div
        style={prefersReduced ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `rgba(10,10,10,${overlay})` }}
      />
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
