'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '10', suffix: '+', label: 'Années d\'expertise' },
  { value: '100', suffix: '%', label: 'Satisfaction clients' },
  { value: '4', suffix: '', label: 'Domaines d\'expertise' },
  { value: '48', suffix: 'h', label: 'Délai soumission' },
]

export default function StatsBand() {
  return (
    <section className="relative bg-ink overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative px-5 md:px-10 py-20 md:py-28 border-t border-b border-concrete-50/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-l border-concrete-50/15 pl-6"
            >
              <p className="font-anton uppercase text-7xl md:text-8xl tracking-tightest text-concrete-50 leading-[0.95]">
                {s.value}
                <span className="text-safety">{s.suffix}</span>
              </p>
              <p className="eyebrow text-concrete-400 mt-4">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
