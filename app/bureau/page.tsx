import ContactBand from '@/components/ContactBand'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function BureauPage() {
  return (
    <>
      <PageIntro
        eyebrow="Bureau · Sherbrooke"
        title="Notre Bureau"
        imageSrc="/media/texture-steel.jpg"
        alt="Bureau Construction Michael Aubut"
        caption="Une équipe locale, présente et à l'écoute pendant et après la réalisation de votre projet."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel number="—" label="Coordonnées" />
            <div className="mt-12 space-y-12">
              <Reveal delay={0.05}>
                <div className="flex items-start gap-5">
                  <MapPin className="w-5 h-5 text-safety mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="eyebrow text-concrete-400 mb-3">Adresse</p>
                    <p className="font-anton uppercase text-3xl md:text-4xl tracking-tight leading-[0.95] text-concrete-50">
                      1100 rue Galt Est<br />
                      Sherbrooke (QC)<br />
                      J1G 1Y5
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex items-start gap-5">
                  <Phone className="w-5 h-5 text-safety mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="eyebrow text-concrete-400 mb-3">Téléphone</p>
                    <a
                      href="tel:18195601882"
                      className="cursor-pointer font-anton uppercase text-3xl md:text-4xl tracking-tight leading-[0.95] text-concrete-50 hover:text-safety transition-colors"
                    >
                      1·819·560·1882
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex items-start gap-5">
                  <Clock className="w-5 h-5 text-safety mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="eyebrow text-concrete-400 mb-3">Heures d&apos;ouverture</p>
                    <ul className="space-y-2 text-concrete-200 text-lg">
                      <li className="flex justify-between gap-8">
                        <span>Lundi — Vendredi</span>
                        <span className="text-concrete-50">8h00 — 17h00</span>
                      </li>
                      <li className="flex justify-between gap-8">
                        <span>Samedi</span>
                        <span className="text-concrete-50">Sur rendez-vous</span>
                      </li>
                      <li className="flex justify-between gap-8">
                        <span>Dimanche</span>
                        <span className="text-concrete-500">Fermé</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal direction="left" delay={0.2} className="md:col-span-7 relative aspect-[4/5] md:aspect-auto md:min-h-[600px] bg-concrete-700 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.7856!2d-71.8785!3d45.4042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI0JzE1LjEiTiA3McKwNTInNDIuNiJX!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.6) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de localisation du bureau"
              className="absolute inset-0"
            />
            <div className="absolute top-5 left-5 bg-ink text-concrete-50 px-4 py-2 z-10">
              <p className="eyebrow text-safety">Bureau · MA</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-20 md:mt-32 max-w-3xl border-l-4 border-safety pl-6 md:pl-8">
          <p className="font-anton uppercase text-3xl md:text-4xl tracking-tight leading-tight text-concrete-50">
            Notre équipe est présente et à l&apos;écoute tant pendant
            qu&apos;après la réalisation de votre projet.
          </p>
          <p className="mt-6 text-lg text-concrete-200 leading-relaxed">
            Nous vous assurons d&apos;un respect des échéances et d&apos;une
            exécution professionnelle.
          </p>
        </Reveal>
      </section>

      <SoumissionBand />
      <ContactBand />
    </>
  )
}
