'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check } from 'lucide-react'
import ContactBand from '@/components/ContactBand'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'

const materials = [
  'Terre à jardin*',
  'Terre à semence/tourbe**',
  'Terre à plate-bande***',
  'Sable',
  'Poussière de roches',
  'Paillis noir',
  'Ardoise 0-3/4',
  'Ardoise ¾ nette',
  'Pierre nette ½',
  'Gallet de rivière ¾ à 1-1/2',
  'Gallet de rivière 1-1/2 à 2-1/2',
]

export default function MateriauxEnVracPage() {
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [depth, setDepth] = useState('')
  const [total, setTotal] = useState('')

  const calculate = () => {
    const w = parseFloat(width)
    const l = parseFloat(length)
    const d = parseFloat(depth)
    if (w && l && d) {
      const cubicYards = ((w * l * (d / 12)) / 27) * 1.2
      setTotal(cubicYards.toFixed(2))
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="Service · 04"
        title="Vrac"
        imageSrc="/media/texture-concrete.jpg"
        alt="Texture matériaux en vrac"
        caption="Terre, sable, paillis, pierre, gallet de rivière — en vente à la verge, livraison disponible."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — Materials list */}
          <div className="lg:col-span-7">
            <SectionLabel number="—" label="Catalogue" />
            <h2 className="mt-8 font-anton uppercase text-massive tracking-tightest leading-[1.05] max-w-2xl">
              Pour tous vos projets extérieurs.
            </h2>
            <p className="mt-8 text-concrete-300 leading-relaxed max-w-xl text-lg">
              Nous offrons divers matériaux en vrac, tel que&nbsp;:
            </p>

            <ul className="mt-12 border-t border-concrete-50/15">
              {materials.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.03 }}
                  className="group flex items-center justify-between py-5 border-b border-concrete-50/15 hover:pl-3 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="eyebrow font-mono text-concrete-500 group-hover:text-safety transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-anton uppercase text-2xl md:text-3xl tracking-tight text-concrete-50">
                      {m}
                    </span>
                  </div>
                  <Check
                    className="w-5 h-5 text-safety opacity-0 group-hover:opacity-100 transition-opacity"
                    strokeWidth={1.5}
                  />
                </motion.li>
              ))}
            </ul>

            <Reveal delay={0.1} className="mt-10">
              <p className="text-concrete-100 text-lg">
                Ces produits sont en vente à la verge et un service de
                livraison vous est aussi offert.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 space-y-3 text-sm text-concrete-400 leading-relaxed border-l-2 border-safety pl-5">
              <p>
                * Terre enrichi de compost pour un meilleur rendement,
                structure favorisant le drainage et une bonne aération,
                contient un compost fait à partir de résidus verts
              </p>
              <p>
                ** Terre enrichi de compost afin de fournir des éléments
                nutritifs au gazon en plaques, mélange uniforme qui facilite
                la manipulation et l&apos;enracinement, bon drainage
              </p>
              <p>
                *** Terre riche en matière organique, enrichi de compost pour
                un meilleur rendement, augmente la rétention en eau du sol
              </p>
            </Reveal>
          </div>

          {/* Right — Calculator */}
          <Reveal direction="up" delay={0.2} className="lg:col-span-5 lg:col-start-8">
            <div className="lg:sticky lg:top-32 bg-concrete-50 text-ink p-8 md:p-10">
              <div className="flex items-center gap-4 mb-2">
                <span className="eyebrow font-mono text-safety">—</span>
                <span className="block w-10 h-px bg-ink/30" />
                <span className="eyebrow text-concrete-700">Calculateur</span>
              </div>

              <h3 className="font-anton uppercase text-4xl md:text-5xl tracking-tightest leading-[1.05] mt-6">
                Rectangle
              </h3>

              <div className="mt-10 space-y-7">
                <div>
                  <label className="eyebrow text-concrete-700 mb-2 block">
                    Largeur
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    placeholder="(pieds)"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 focus:border-safety focus:ring-0 focus:outline-none text-ink text-2xl md:text-3xl font-anton uppercase placeholder:text-concrete-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="eyebrow text-concrete-700 mb-2 block">
                    Longueur
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    placeholder="(pieds)"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 focus:border-safety focus:ring-0 focus:outline-none text-ink text-2xl md:text-3xl font-anton uppercase placeholder:text-concrete-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="eyebrow text-concrete-700 mb-2 block">
                    Profondeur
                  </label>
                  <input
                    type="number"
                    value={depth}
                    onChange={(e) => setDepth(e.target.value)}
                    placeholder="(pouces)"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-ink/20 focus:border-safety focus:ring-0 focus:outline-none text-ink text-2xl md:text-3xl font-anton uppercase placeholder:text-concrete-400 transition-colors"
                  />
                </div>

                <p className="text-xs text-concrete-500 italic">
                  * un 10% de plus est déjà calculé.
                </p>

                <button
                  onClick={calculate}
                  className="cursor-pointer w-full bg-ink hover:bg-safety text-concrete-50 hover:text-ink font-anton uppercase tracking-wider text-lg py-5 transition-colors duration-200"
                >
                  Calculez
                </button>

                <div className="border-t border-ink/15 pt-7">
                  <p className="eyebrow text-concrete-700 mb-3">
                    Verges cubique
                  </p>
                  <p className="font-anton uppercase text-mega leading-[0.95] text-ink tracking-tightest">
                    {total || '—'}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SoumissionBand />
      <ContactBand />
    </>
  )
}
