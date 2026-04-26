'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SlowParallax from './motion/SlowParallax'

export default function SoumissionBand() {
  return (
    <SlowParallax
      src="/media/scale-aerial.jpg"
      alt="Chantier vue aérienne"
      height="min-h-[70vh]"
      overlay={0.65}
      intensity={0.2}
    >
      <div className="h-full px-5 md:px-10 py-24 md:py-32 flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow text-safety mb-6"
            >
              02 — Soumission
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-anton uppercase text-colossal text-concrete-50 tracking-tightest leading-[0.9]"
            >
              Soumission<br />
              gratuite <span className="text-safety">en 48h</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 md:col-start-8"
          >
            <Link
              href="/contact"
              className="cursor-pointer group inline-flex items-center justify-between gap-6 w-full px-7 py-7 bg-concrete-50 hover:bg-safety text-ink transition-colors duration-300"
            >
              <span className="font-anton uppercase text-2xl md:text-3xl tracking-tight">
                Demander
              </span>
              <span className="w-12 h-12 border border-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </SlowParallax>
  )
}
