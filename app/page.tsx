import ContactSection from '@/components/ContactSection'
import ParallaxSection from '@/components/ParallaxSection'
import ServiceCard from '@/components/ServiceCard'
import SoumissionSection from '@/components/SoumissionSection'

export default function Home() {
  return (
    <main>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        imageUrl="/images/background4.jpg"
        alt="Construction background"
        minHeight="500px"
      >
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-white drop-shadow-lg font-anton">
              Construction Michael Aubut
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-md max-w-3xl mx-auto px-4">
              Qualité et expertise pour la satisfaction de nos clients depuis 10 ans
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ServiceCard
              title="Construction Résidentiel"
              description="Nous vous proposons la conception de A à Z de votre maison, nous nous occupons de toutes les étapes de la construction. Faire affaire avec un professionnel de la construction vous avantagera grandement."
              imageUrl="/images/card1.jpg"
              link="/services/construction"
            />
            
            <ServiceCard
              title="Construction Commercial"
              description="Que ce soit la gérance de vos projets, la conception sur mesure ou un projet clé en main notre expérience et notre expertise dans le domaine vous garantit un travail professionnel de qualité."
              imageUrl="/images/card2.jpg"
              link="/services/construction"
            />
            
            <ServiceCard
              title="Rénovation"
              description="Que ce soit la gérance de vos projets, la conception sur mesure ou un projet clé en main notre expérience et notre expertise dans le domaine vous garantit un travail professionnel de qualité."
              imageUrl="/images/card3.jpg"
              link="/services/renovation"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Excavation"
              description="Nous sommes disposé à effectuer vos travaux de mini-excavation, que ce soit pour vos drains, une tranchée dans le sol, le nivelage de votre terrain ou autres."
              imageUrl="/images/card4.jpg"
              link="/services/excavation"
            />
            
            <ServiceCard
              title="Vrac"
              description="Pour tous vos projets extérieurs, nous avons ce qu&apos;il vous faut! Terre, sable, paillis, poussières de roche, ardoise, pierre nette, gallet de rivière, en vente à la verge!"
              imageUrl="/images/card5.jpg"
              link="/services/materiaux-en-vrac"
              highlighted={true}
            />
          </div>
        </div>
      </section>

      {/* Vrac Calculator CTA */}
      <ParallaxSection 
        imageUrl="/images/background3.jpg"
        alt="Background"
        minHeight="300px"
      >
        <div className="container mx-auto px-4 py-24">
          <div className="text-center">
            <a 
              href="/services/materiaux-en-vrac"
              className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 hover:bg-amber-500 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </a>
            <p className="text-white text-xl mt-4 font-semibold drop-shadow-lg">
              Calculateur de vrac
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* Partner Logos */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img src="/images/logo-apcha.jpg" alt="APCHA" className="h-16 object-contain" />
              <img src="/images/logo-ccq.jpg" alt="CCQ" className="h-16 object-contain" />
              <img src="/images/logo-abritat.jpg" alt="Abritat" className="h-16 object-contain" />
              <img src="/images/logo-rbq.jpg" alt="RBQ" className="h-16 object-contain" />
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
