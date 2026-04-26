import ContactBand from '@/components/ContactBand'
import ImageGrid from '@/components/ImageGrid'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import RevealText from '@/components/motion/RevealText'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'

export default function ExcavationPage() {
  const images = [
    { src: '/images/excavation-1.jpg', alt: 'Excavation chantier' },
    { src: '/images/excavation-2.jpg', alt: 'Mini-excavation drain' },
    { src: '/images/excavation-3.jpg', alt: 'Tranchée terrain' },
    { src: '/images/excavation-4.jpg', alt: 'Nivelage de terrain' },
  ]

  return (
    <>
      <PageIntro
        eyebrow="Service · 03"
        title="Excavation"
        imageSrc="/media/excavation-action.jpg"
        alt="Mini-excavatrice en action"
        caption="Drains, tranchées, nivelage — un travail de qualité par une équipe de professionnels."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel number="—" label="Mini-excavation" />
            <RevealText
              text="Précision sur le terrain"
              as="h2"
              className="mt-8 font-anton uppercase text-massive tracking-tightest leading-[1]"
              stagger={0.05}
            />
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.2}>
              <p className="text-xl text-concrete-100 leading-relaxed max-w-2xl">
                Nous sommes disposé à effectuer vos travaux de mini-excavation,
                que ce soit pour vos drains, une tranchée dans le sol, le
                nivelage de votre terrain ou autres, n&apos;hésitez pas à
                communiquer avec nous. Notre équipe de professionnels saura
                vous offrir un travail de qualité.
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
