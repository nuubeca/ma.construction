'use client'

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import { type ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface RevealProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: ReactNode
  delay?: number
  duration?: number
  distance?: number
  direction?: Direction
  once?: boolean
  amount?: number
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance }
    case 'down':
      return { y: -distance }
    case 'left':
      return { x: distance }
    case 'right':
      return { x: -distance }
    default:
      return {}
  }
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  distance = 40,
  direction = 'up',
  once = true,
  amount = 0.2,
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <motion.div {...rest}>{children}</motion.div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsetFor(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
