import ParallaxSection from '@/components/ParallaxSection'
import ContactSection from '@/components/ContactSection'
import SoumissionSection from '@/components/SoumissionSection'

export default function RenovationPage() {
  const images = [
    'https://ma.construction/images/renovation-1.jpg',
    'https://ma.construction/images/renovation-2.jpg',
    'https://ma.construction/images/renovation-3.jpg',
    'https://ma.construction/images/renovation-4.jpg',
  ]

  return (
    <main>
      {/* Hero Section */}
      <ParallaxSection 
        imageUrl="https://ma.construction/images/background4.jpg"
        alt="Renovation background"
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
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Notre équipe possède l&apos;expertise pour réaliser tous vos projets!
                  </h2>
                  <p className="text-lg leading-relaxed">
                    Nous serons présents pour vous conseiller dans les choix qui s&apos;offriront à vous, en considérant vos besoins, vos goûts, ainsi que votre budget. Voici quelques-uns des travaux que notre équipe est en mesure d&apos;effectuer :
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Revêtement extérieur</h3>
                  <p className="leading-relaxed">
                    Pour le revêtement extérieur d&apos;une propriété, vous avez l&apos;embarras du choix! Mais encore faut-il faire les bons choix, parmi tous les produits qui s&apos;offrent à vous. Connaitre les avantages et inconvénient de chaque type de matériaux vous permettra de faire un choix éclairé. Tant l&apos;aspect esthétique, que la qualité des matériaux sont à considérer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Réfection de la toiture</h3>
                  <p className="leading-relaxed">
                    Il existe plusieurs types de revêtement de toiture, tel que le bardeau d&apos;asphalte, la toiture métallique avec ou sans vis apparentes, la toiture d&apos;ardoise, etc. Nous saurons vous expliquer les forces et les faiblesses et chacun.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Balcons</h3>
                  <p className="leading-relaxed">
                    Que ce soit pour un balcon en bois (épinette traité ou cèdre teint) ou en fibre de verre, pour des rampes en bois ou en aluminium, nous saurons vous renseigner afin de vous aider à prendre la meilleure décision, avant d&apos;effectuer la réalisation des travaux.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Garage/remise</h3>
                  <p className="leading-relaxed">
                    Notre équipe peut construire votre garage, à partir de l&apos;excavation jusqu&apos;à l&apos;étape que vous souhaitez, tout en vous conseillant dans les choix de matériaux.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Agrandissement</h3>
                  <p className="leading-relaxed">
                    Lors de l&apos;agrandissement d&apos;une propriété, nous pouvons soit conserver l&apos;apparence d&apos;origine de la maison, en préservant l&apos;homogénéité du quartier ou soit changer complètement l&apos;apparence de celle-ci afin de lui redonner un nouveau look. L&apos;agrandissement d&apos;une résidence apporte certainement une plus-value à celle-ci. Nous saurons vous guider dans votre projet, quel que soit l&apos;ampleur des travaux.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Réaménagement/finition intérieur</h3>
                  <p className="leading-relaxed">
                    Que vous souhaitiez rénover votre salle de bain ou votre cuisine, modifier les divisions existantes, faire la finition de votre sous-sol, déplacer une cage d&apos;escalier mal positionnée, remplacer votre revêtement de plancher, ou tout autre type de travaux, nous équipe est à votre disposition pour réaliser vos objectifs!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Remplacement/ajout de portes et fenêtres</h3>
                  <p className="leading-relaxed">
                    Effectuer des choix éclairés en matière de portes et fenêtres peut vous permettre de gagner en confort et en consommation énergétique. Nous effectuons toutes les étapes lors de l&apos;ajout ou du remplacement de portes et fenêtres, soit l&apos;installation, l&apos;isolation, le calfeutrage, ainsi que la pose des moulures. De par son expertise, notre équipe saura vous recommander les meilleurs produits pour votre demeure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Et plusieurs autres…</h3>
                  <p className="leading-relaxed">
                    Confiez-nous votre projet
                  </p>
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <img 
                      src={img} 
                      alt={`Rénovation ${index + 1}`}
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

