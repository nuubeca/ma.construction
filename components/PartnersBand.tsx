'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const partners = [
  { name: 'APCHA', src: '/images/logo-apcha.jpg' },
  { name: 'CCQ', src: '/images/logo-ccq.jpg' },
  { name: 'Abritat', src: '/images/logo-abritat.jpg' },
  { name: 'RBQ', src: '/images/logo-rbq.jpg' },
]

export default function PartnersBand() {
  return (
    <section className="relative bg-ink border-t border-b border-concrete-50/10">
      <div className="px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-safety mb-2">Accréditations</p>
            <p className="text-concrete-300 text-sm leading-relaxed max-w-xs">
              Membre certifié des organismes de l&apos;industrie de la construction au Québec.
            </p>
            <p className="mt-4 eyebrow text-concrete-100">
              RBQ <span className="text-safety">56716202</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-center">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative h-16 md:h-20 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
