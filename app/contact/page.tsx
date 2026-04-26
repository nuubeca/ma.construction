'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { toast } from 'sonner'
import { ArrowUpRight } from 'lucide-react'
import ContactBand from '@/components/ContactBand'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'
import { sendContactEmail } from '@/app/actions/contact'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(formData)
      if (result.success) {
        toast.success('Message envoyé!', {
          description:
            'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
        })
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      } else {
        toast.error("Erreur d'envoi", { description: result.error })
      }
    } catch (error) {
      console.error('Error:', error)
      toast.error('Erreur', {
        description: "Une erreur est survenue lors de l'envoi du message",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'w-full px-0 py-4 bg-transparent border-0 border-b border-concrete-50/30 focus:border-safety focus:ring-0 focus:outline-none text-concrete-50 placeholder:text-concrete-500 text-lg transition-colors'

  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Contactez-nous"
        imageSrc="/media/gesture-hands.jpg"
        alt="Échange sur un chantier"
        caption="Soumission gratuite en 48h. Nous vous répondrons dans les plus brefs délais."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel number="—" label="Formulaire" />
            <h2 className="mt-8 font-anton uppercase text-massive tracking-tightest leading-[0.9]">
              Parlez<br />
              <span className="text-safety">·</span>nous de<br />
              votre projet
            </h2>
            <p className="mt-8 text-concrete-300 leading-relaxed">
              Plus vous nous donnerez de détails, plus notre soumission sera
              précise.
            </p>
          </div>

          <Reveal direction="up" className="md:col-span-8 md:col-start-5">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                >
                  <label
                    htmlFor="firstName"
                    className="eyebrow text-concrete-400 block mb-3"
                  >
                    01 — Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label
                    htmlFor="lastName"
                    className="eyebrow text-concrete-400 block mb-3"
                  >
                    02 — Nom de famille
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <label
                    htmlFor="email"
                    className="eyebrow text-concrete-400 block mb-3"
                  >
                    03 — Courriel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label
                    htmlFor="phone"
                    className="eyebrow text-concrete-400 block mb-3"
                  >
                    04 — Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <label
                  htmlFor="message"
                  className="eyebrow text-concrete-400 block mb-3"
                >
                  05 — Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Décrivez votre projet…"
                  className={`${inputClass} resize-none`}
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-6"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer group inline-flex items-center justify-between gap-8 w-full md:w-auto md:min-w-[420px] px-7 py-6 bg-safety hover:bg-safety-600 disabled:bg-concrete-500 disabled:cursor-not-allowed text-ink font-anton uppercase tracking-wider text-xl md:text-2xl transition-colors duration-200"
                >
                  <span>{isSubmitting ? 'Envoi en cours…' : 'Envoyer'}</span>
                  <span className="w-12 h-12 border border-ink flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                    <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                </button>
              </motion.div>
            </form>
          </Reveal>
        </div>
      </section>

      <SoumissionBand />
      <ContactBand />
    </>
  )
}
