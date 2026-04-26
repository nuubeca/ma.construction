'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const channels = [
  {
    icon: Mail,
    label: 'Par écrit',
    value: 'info@ma.construction',
    href: '/contact',
    type: 'link' as const,
  },
  {
    icon: Phone,
    label: 'Par téléphone',
    value: '1·819·560·1882',
    href: 'tel:18195601882',
    type: 'tel' as const,
  },
  {
    icon: MapPin,
    label: 'Venez nous voir',
    value: 'Sherbrooke · QC',
    href: '/bureau',
    type: 'link' as const,
  },
]

export default function ContactBand() {
  return (
    <section className="bg-concrete-50 text-ink relative overflow-hidden">
      <div className="px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="eyebrow font-mono text-safety">03</span>
          <span className="block w-10 h-px bg-ink/30" />
          <span className="eyebrow text-concrete-700">Contact</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-anton uppercase text-colossal tracking-tightest text-ink max-w-[14ch]"
        >
          Contactez<span className="text-safety">·</span>nous
        </motion.h2>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
          {channels.map((c, i) => {
            const Icon = c.icon
            const inner = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-concrete-50 hover:bg-ink hover:text-concrete-50 transition-colors duration-300 p-8 md:p-10 cursor-pointer h-full"
              >
                <div className="flex items-start justify-between mb-12">
                  <span className="eyebrow font-mono text-concrete-500 group-hover:text-safety transition-colors">
                    0{i + 1}
                  </span>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <p className="eyebrow text-concrete-500 group-hover:text-concrete-200 mb-3 transition-colors">
                  {c.label}
                </p>
                <p className="font-anton uppercase text-2xl md:text-3xl leading-tight tracking-tight">
                  {c.value}
                </p>
                <span className="absolute top-8 right-8 w-10 h-10 border border-current flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </motion.div>
            )
            return c.type === 'tel' ? (
              <a key={i} href={c.href}>{inner}</a>
            ) : (
              <Link key={i} href={c.href}>{inner}</Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
