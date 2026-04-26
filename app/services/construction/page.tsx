import ContactBand from '@/components/ContactBand'
import ImageGrid from '@/components/ImageGrid'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import RevealText from '@/components/motion/RevealText'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'

export default function ConstructionPage() {
  const images = [
    { src: '/images/construction-1.jpg', alt: 'Chantier construction' },
    { src: '/images/construction-2.jpg', alt: 'Charpente résidentielle' },
    { src: '/images/construction-3.jpg', alt: 'Construction commerciale' },
    { src: '/images/construction-4.jpg', alt: 'Finition extérieure' },
  ]

  return (
    <>
      <PageIntro
        eyebrow="Service · 01"
        title="Construction"
        imageSrc="/media/scale-building.jpg"
        alt="Chantier de construction massif"
        caption="Résidentiel et commercial — projets clé en main, gérance ou auto-construction."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel number="—" label="Résidentiel" />
            <RevealText
              text="Résidentiel"
              as="h2"
              className="mt-8 font-anton uppercase text-colossal tracking-tightest leading-[0.85]"
            />
          </div>

          <div className="md:col-span-7 space-y-8 text-concrete-200 leading-relaxed text-lg">
            <Reveal delay={0.1}>
              <p>
                Pour un projet clé en main, que ce soit pour la construction de
                votre demeure ou de votre immeuble à revenu, notre équipe saura
                diriger chacune des étapes de la construction. Nous serons là
                pour vous conseiller dans la conception des plans, le choix
                des matériaux, l&apos;aménagement intérieur, ainsi que la
                finition.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Si toutefois vous désirez faire appel à notre équipe pour
                effectuer une ou plusieurs étapes dans votre projet
                d&apos;auto-construction, nous saurons nous adapter selon vos
                besoins. Nous sommes à l&apos;écoute des besoins de nos clients
                et notre expérience dans le domaine nous permettra de vous
                conseiller en fonction de vos goûts, de vos objectifs et de
                votre budget!
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal className="my-20 md:my-28 ticker-divider text-concrete-50/40" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel number="—" label="Commercial" />
            <RevealText
              text="Commercial"
              as="h2"
              className="mt-8 font-anton uppercase text-colossal tracking-tightest leading-[0.85]"
            />
          </div>
          <div className="md:col-span-7 text-concrete-200 leading-relaxed text-lg">
            <Reveal delay={0.1}>
              <p>
                La construction d&apos;un bâtiment commercial est un projet
                d&apos;envergure demandant une certaine expertise et un certain
                savoir-faire. Notre équipe est à votre disposition afin de
                concrétiser votre projet!
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-10">
          <span className="eyebrow font-mono text-safety">—</span>
          <span className="block w-10 h-px bg-ink/30" />
          <span className="eyebrow text-concrete-700">Galerie</span>
        </div>
        <ImageGrid images={images} />
      </section>

      <SoumissionBand />
      <ContactBand />
    </>
  )
}
