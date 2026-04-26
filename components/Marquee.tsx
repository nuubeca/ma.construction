'use client'

import { useReducedMotion } from 'framer-motion'

interface MarqueeProps {
  items: string[]
  speed?: 'slow' | 'fast'
  className?: string
  separator?: string
}

export default function Marquee({
  items,
  speed = 'slow',
  className = '',
  separator = '◆',
}: MarqueeProps) {
  const prefersReduced = useReducedMotion()
  const list = [...items, ...items]
  const animClass = speed === 'fast' ? 'animate-marquee' : 'animate-marquee-slow'

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max ${
          prefersReduced ? '' : animClass
        } gap-12 whitespace-nowrap`}
      >
        {list.map((item, i) => (
          <span
            key={i}
            className="font-anton uppercase text-5xl md:text-7xl tracking-tightest text-current flex items-center gap-12"
          >
            {item}
            <span className="text-safety opacity-60 text-2xl md:text-3xl">
              {separator}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
