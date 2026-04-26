import CinematicHero from '@/components/CinematicHero'
import ContactBand from '@/components/ContactBand'
import Marquee from '@/components/Marquee'
import PartnersBand from '@/components/PartnersBand'
import Reveal from '@/components/motion/Reveal'
import RevealText from '@/components/motion/RevealText'
import SectionLabel from '@/components/SectionLabel'
import ServiceCard from '@/components/ServiceCard'
import SoumissionBand from '@/components/SoumissionBand'
import StatsBand from '@/components/StatsBand'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <CinematicHero
        videoSrc="/media/hero.mp4"
        posterSrc="/media/scale-aerial.jpg"
        alt="Chantier Construction Michael Aubut, vue aérienne"
      />

      {/* Marquee transition band */}
      <section className="bg-ink py-10 border-y border-concrete-50/10 overflow-hidden">
        <Marquee
          items={[
            'Construction',
            'Rénovation',
            'Excavation',
            'Vrac',
            'Sherbrooke',
          ]}
          speed="slow"
          className="text-concrete-50"
        />
      </section>

      {/* Manifesto / Intro */}
      <section className="relative bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel number="01" label="Manifesto" />
            <Reveal delay={0.1} className="mt-10">
              <p className="text-concrete-300 text-sm uppercase tracking-[0.2em] leading-relaxed">
                Sherbrooke · Estrie
              </p>
              <p className="mt-3 text-concrete-200 leading-relaxed max-w-sm">
                Une équipe locale, présente sur le chantier — pas seulement à
                l&apos;administration.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <RevealText
              text="Bâtir solide. Livrer net. Respecter les délais."
              as="h2"
              className="font-anton uppercase text-massive md:text-colossal tracking-tightest leading-[0.9]"
              stagger={0.05}
            />
            <Reveal delay={0.4} className="mt-10 max-w-2xl">
              <p className="text-lg text-concrete-200 leading-relaxed">
                Nous vous proposons la conception de A à Z de votre maison.
                Notre équipe s&apos;occupe de toutes les étapes de la
                construction. Faire affaire avec un professionnel vous
                avantagera grandement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsBand />

      {/* Services Grid */}
      <section className="relative bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <SectionLabel number="02" label="Services" />
          </div>
          <div className="md:col-span-8">
            <RevealText
              text="Quatre disciplines. Une seule équipe."
              as="h2"
              className="font-anton uppercase text-massive md:text-colossal tracking-tightest leading-[0.9]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            index="01 / 05"
            title="Construction Résidentielle"
            description="Nous vous proposons la conception de A à Z de votre maison, nous nous occupons de toutes les étapes de la construction. Faire affaire avec un professionnel de la construction vous avantagera grandement."
            imageUrl="/images/card1.jpg"
            link="/services/construction"
          />
          <ServiceCard
            index="02 / 05"
            title="Construction Commerciale"
            description="Que ce soit la gérance de vos projets, la conception sur mesure ou un projet clé en main notre expérience et notre expertise dans le domaine vous garantit un travail professionnel de qualité."
            imageUrl="/images/card2.jpg"
            link="/services/construction"
          />
          <ServiceCard
            index="03 / 05"
            title="Rénovation"
            description="Que ce soit la gérance de vos projets, la conception sur mesure ou un projet clé en main notre expérience et notre expertise dans le domaine vous garantit un travail professionnel de qualité."
            imageUrl="/images/card3.jpg"
            link="/services/renovation"
          />
          <ServiceCard
            index="04 / 05"
            title="Excavation"
            description="Nous sommes disposé à effectuer vos travaux de mini-excavation, que ce soit pour vos drains, une tranchée dans le sol, le nivelage de votre terrain ou autres."
            imageUrl="/images/card4.jpg"
            link="/services/excavation"
          />
          <ServiceCard
            index="05 / 05"
            title="Vrac"
            description="Pour tous vos projets extérieurs, nous avons ce qu'il vous faut! Terre, sable, paillis, poussières de roche, ardoise, pierre nette, gallet de rivière, en vente à la verge!"
            imageUrl="/images/card5.jpg"
            link="/services/materiaux-en-vrac"
            highlighted
          />
        </div>
      </section>

      {/* Editorial split */}
      <section className="relative bg-concrete-50 text-ink px-5 md:px-10 py-24 md:py-40 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal direction="left" className="md:col-span-6 relative aspect-[4/5] md:aspect-[3/4]">
            <Image
              src="/media/gesture-pour.jpg"
              alt="Le geste : coulée de béton sur fondation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 px-6 py-5 bg-gradient-to-t from-ink/80 to-transparent text-concrete-50">
              <p className="eyebrow">Le geste</p>
            </div>
          </Reveal>

          <div className="md:col-span-5 md:col-start-8">
            <SectionLabel number="—" label="Métier" light />
            <h2 className="mt-10 font-anton uppercase text-massive tracking-tightest leading-[0.9]">
              Du béton coulé <br />
              au bardeau posé.
            </h2>
            <p className="mt-8 text-concrete-700 leading-relaxed text-lg max-w-md">
              Construction résidentielle, immeubles à revenus, projets clé en
              main ou auto-construction&nbsp;: nous nous adaptons à votre
              budget, vos goûts et vos objectifs.
            </p>
            <Link
              href="/services/construction"
              className="cursor-pointer mt-10 inline-flex items-center gap-3 group"
            >
              <span className="font-anton uppercase text-2xl tracking-tight">
                Voir les services
              </span>
              <span className="w-12 h-12 border border-ink flex items-center justify-center group-hover:bg-safety group-hover:border-safety transition-colors">
                <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <PartnersBand />

      {/* Soumission CTA */}
      <SoumissionBand />

      {/* Contact */}
      <ContactBand />
    </>
  )
}
