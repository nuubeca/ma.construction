import ParallaxSection from '@/components/ParallaxSection'
import ContactSection from '@/components/ContactSection'
import SoumissionSection from '@/components/SoumissionSection'

export default function ExcavationPage() {
  const images = [
    'https://ma.construction/images/excavation-1.jpg',
    'https://ma.construction/images/excavation-2.jpg',
    'https://ma.construction/images/excavation-3.jpg',
    'https://ma.construction/images/excavation-4.jpg',
  ]

  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="https://ma.construction/images/background4.jpg"
        alt="Excavation background"
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
                <p className="text-lg leading-relaxed">
                  Nous sommes disposé à effectuer vos travaux de mini-excavation, que ce soit pour vos drains, une tranchée dans le sol, le nivelage de votre terrain ou autres, n&apos;hésitez pas à communiquer avec nous. Notre équipe de professionnels saura vous offrir un travail de qualité.
                </p>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={img} 
                      alt={`Excavation ${index + 1}`}
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

