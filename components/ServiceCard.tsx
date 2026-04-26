'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  index: string
  title: string
  description: string
  imageUrl: string
  link: string
  highlighted?: boolean
}

export default function ServiceCard({
  index,
  title,
  description,
  imageUrl,
  link,
  highlighted = false,
}: ServiceCardProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${highlighted ? 'lg:col-span-2' : ''}`}
    >
      <Link href={link} className="block cursor-pointer">
        <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-ink">
          <motion.div
            whileHover={prefersReduced ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="grain absolute inset-0 pointer-events-none opacity-70" />

          <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-concrete-100">
            <span className="eyebrow font-mono">{index}</span>
            <span className="w-10 h-10 border border-concrete-50/40 flex items-center justify-center group-hover:bg-safety group-hover:border-safety group-hover:text-ink transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 p-5 md:p-7">
            <h3 className="font-anton uppercase text-3xl md:text-4xl lg:text-5xl tracking-tightest text-concrete-50 leading-[1.05]">
              {title}
            </h3>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-12 gap-4">
          <p className="col-span-12 md:col-span-9 text-concrete-200 leading-relaxed text-[15px]">
            {description}
          </p>
          <div className="col-span-12 md:col-span-3 flex md:justify-end items-start">
            <span className="inline-flex items-center gap-2 text-safety eyebrow border-b border-safety/30 pb-1 group-hover:border-safety transition-colors">
              Découvrir
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
