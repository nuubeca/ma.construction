'use client'

import { useState } from 'react'
import ParallaxSection from '@/components/ParallaxSection'
import ContactSection from '@/components/ContactSection'
import SoumissionSection from '@/components/SoumissionSection'

export default function MateriauxEnVracPage() {
  const [width, setWidth] = useState('')
  const [length, setLength] = useState('')
  const [depth, setDepth] = useState('')
  const [total, setTotal] = useState('')

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

  const calculate = () => {
    const w = parseFloat(width)
    const l = parseFloat(length)
    const d = parseFloat(depth)

    if (w && l && d) {
      // Convert inches to feet for depth, calculate cubic yards with 20% extra
      const cubicYards = ((w * l * (d / 12)) / 27) * 1.2
      setTotal(cubicYards.toFixed(2))
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="/images/background5.jpg"
        alt="Vrac background"
        minHeight="250px"
      >
        <div className="py-16" />
      </ParallaxSection>

      {/* Content Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Materials List */}
              <div className="text-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Pour tous vos projets extérieurs, nous avons ce qu&apos;il vous faut. Nous offrons divers matériaux en vrac, tel que :
                </h2>
                
                <ul className="space-y-2 mb-6">
                  {materials.map((material, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-gray-100 transition">
                      <span>{material}</span>
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  Ces produits sont en vente à la verge et un service de livraison vous est aussi offert.
                </h3>

                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    * Terre enrichi de compost pour un meilleur rendement, structure favorisant le drainage et une bonne aération, contient un compost fait à partir de résidus verts
                  </p>
                  <p>
                    ** Terre enrichi de compost afin de fournir des éléments nutritifs au gazon en plaques, mélange uniforme qui facilite la manipulation et l&apos;enracinement, bon drainage
                  </p>
                  <p>
                    *** Terre riche en matière organique, enrichi de compost pour un meilleur rendement, augmente la rétention en eau du sol
                  </p>
                </div>
              </div>

              {/* Calculator */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center border-b-2 border-amber-400 pb-2">
                    Rectangle
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Largeur
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="(pieds)"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-900 bg-white"
                      />
                      <span className="text-2xl font-bold text-gray-600">×</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Longueur
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="(pieds)"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-900 bg-white"
                      />
                      <span className="text-2xl font-bold text-gray-600">×</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Profondeur
                    </label>
                    <input
                      type="number"
                      value={depth}
                      onChange={(e) => setDepth(e.target.value)}
                      placeholder="(pouces)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-900 bg-white"
                    />
                  </div>

                  <p className="text-sm text-gray-600 italic">
                    * un 10% de plus est déjà calculé.
                  </p>

                  <button
                    onClick={calculate}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Calculez!
                  </button>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Verges cubique
                    </label>
                    <input
                      type="text"
                      value={total}
                      readOnly
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 font-bold text-lg text-center text-gray-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soumission Section */}
      <SoumissionSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

