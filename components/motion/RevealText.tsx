'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { type ElementType } from 'react'

interface RevealTextProps {
  text: string
  className?: string
  as?: ElementType
  delay?: number
  stagger?: number
  once?: boolean
}

export default function RevealText({
  text,
  className,
  as: Tag = 'h1',
  delay = 0,
  stagger = 0.05,
  once = true,
}: RevealTextProps) {
  const prefersReduced = useReducedMotion()
  const words = text.split(' ')

  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block will-change-transform"
            style={{ marginRight: '0.25em' }}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  )
}
