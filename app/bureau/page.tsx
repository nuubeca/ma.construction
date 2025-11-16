import ParallaxSection from '@/components/ParallaxSection'
import ContactSection from '@/components/ContactSection'
import SoumissionSection from '@/components/SoumissionSection'

export default function BureauPage() {
  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="https://ma.construction/images/background5.jpg"
        alt="Bureau background"
        minHeight="250px"
      >
        <div className="py-16" />
      </ParallaxSection>

      {/* Content Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-gray-900 text-center">
                Notre Bureau
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Address Info */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Adresse</h2>
                    <p className="text-lg text-gray-800">
                      1100 rue Galt Est<br />
                      Sherbrooke (Québec)<br />
                      J1G 1Y5
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Téléphone</h2>
                    <a 
                      href="tel:18195601882" 
                      className="text-lg text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      1-819-560-1882
                    </a>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Heures d&apos;ouverture</h2>
                    <p className="text-gray-800">
                      Lundi - Vendredi: 8h00 - 17h00<br />
                      Samedi: Sur rendez-vous<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2803.7856!2d-71.8785!3d45.4042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI0JzE1LjEiTiA3McKwNTInNDIuNiJX!5e0!3m2!1sen!2sca!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carte de localisation du bureau"
                  />
                </div>
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <p className="text-gray-800 text-lg">
                  Notre équipe est présente et à l&apos;écoute tant pendant qu&apos;après la réalisation de votre projet. 
                  Nous vous assurons d&apos;un respect des échéances et d&apos;une exécution professionnelle.
                </p>
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

