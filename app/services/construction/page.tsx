import ParallaxSection from '@/components/ParallaxSection'
import ContactSection from '@/components/ContactSection'
import SoumissionSection from '@/components/SoumissionSection'

export default function ConstructionPage() {
  const images = [
    '/images/construction-1.jpg',
    '/images/construction-2.jpg',
    '/images/construction-3.jpg',
    '/images/construction-4.jpg',
  ]

  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="/images/background1.jpg"
        alt="Construction background"
        minHeight="250px"
      >
        <div className="py-16" />
      </ParallaxSection>

      {/* Content Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Text Content */}
              <div className="text-gray-800 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Résidentiel</h2>
                  <p className="text-lg leading-relaxed">
                    Pour un projet clé en main, que ce soit pour la construction de votre demeure ou de votre immeuble à revenu, notre équipe saura diriger chacune des étapes de la construction. Nous serons là pour vous conseiller dans la conception des plans, le choix des matériaux, l&apos;aménagement intérieur, ainsi que la finition.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Si toutefois vous désirez faire appel à notre équipe pour effectuer une ou plusieurs étapes dans votre projet d&apos;auto-construction, nous saurons nous adapter selon vos besoins. Nous sommes à l&apos;écoute des besoins de nos clients et notre expérience dans le domaine nous permettra de vous conseiller en fonction de vos goûts, de vos objectifs et de votre budget!
                </p>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Commercial</h2>
                  <p className="text-lg leading-relaxed">
                    La construction d&apos;un bâtiment commercial est un projet d&apos;envergure demandant une certaine expertise et un certain savoir-faire. Notre équipe est à votre disposition afin de concrétiser votre projet!
                  </p>
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={img} 
                      alt={`Construction ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
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

