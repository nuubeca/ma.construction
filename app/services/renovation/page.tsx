import ContactBand from '@/components/ContactBand'
import ImageGrid from '@/components/ImageGrid'
import PageIntro from '@/components/PageIntro'
import Reveal from '@/components/motion/Reveal'
import RevealText from '@/components/motion/RevealText'
import SectionLabel from '@/components/SectionLabel'
import SoumissionBand from '@/components/SoumissionBand'

const sections = [
  {
    title: 'Revêtement extérieur',
    body: "Pour le revêtement extérieur d'une propriété, vous avez l'embarras du choix! Mais encore faut-il faire les bons choix, parmi tous les produits qui s'offrent à vous. Connaitre les avantages et inconvénient de chaque type de matériaux vous permettra de faire un choix éclairé. Tant l'aspect esthétique, que la qualité des matériaux sont à considérer.",
  },
  {
    title: 'Réfection de la toiture',
    body: "Il existe plusieurs types de revêtement de toiture, tel que le bardeau d'asphalte, la toiture métallique avec ou sans vis apparentes, la toiture d'ardoise, etc. Nous saurons vous expliquer les forces et les faiblesses et chacun.",
  },
  {
    title: 'Balcons',
    body: "Que ce soit pour un balcon en bois (épinette traité ou cèdre teint) ou en fibre de verre, pour des rampes en bois ou en aluminium, nous saurons vous renseigner afin de vous aider à prendre la meilleure décision, avant d'effectuer la réalisation des travaux.",
  },
  {
    title: 'Garage / remise',
    body: "Notre équipe peut construire votre garage, à partir de l'excavation jusqu'à l'étape que vous souhaitez, tout en vous conseillant dans les choix de matériaux.",
  },
  {
    title: 'Agrandissement',
    body: "Lors de l'agrandissement d'une propriété, nous pouvons soit conserver l'apparence d'origine de la maison, en préservant l'homogénéité du quartier ou soit changer complètement l'apparence de celle-ci afin de lui redonner un nouveau look. L'agrandissement d'une résidence apporte certainement une plus-value à celle-ci. Nous saurons vous guider dans votre projet, quel que soit l'ampleur des travaux.",
  },
  {
    title: 'Réaménagement / finition intérieur',
    body: "Que vous souhaitiez rénover votre salle de bain ou votre cuisine, modifier les divisions existantes, faire la finition de votre sous-sol, déplacer une cage d'escalier mal positionnée, remplacer votre revêtement de plancher, ou tout autre type de travaux, nous équipe est à votre disposition pour réaliser vos objectifs!",
  },
  {
    title: 'Remplacement / ajout de portes et fenêtres',
    body: "Effectuer des choix éclairés en matière de portes et fenêtres peut vous permettre de gagner en confort et en consommation énergétique. Nous effectuons toutes les étapes lors de l'ajout ou du remplacement de portes et fenêtres, soit l'installation, l'isolation, le calfeutrage, ainsi que la pose des moulures. De par son expertise, notre équipe saura vous recommander les meilleurs produits pour votre demeure.",
  },
  {
    title: 'Et plusieurs autres…',
    body: 'Confiez-nous votre projet.',
  },
]

export default function RenovationPage() {
  const images = [
    { src: '/images/renovation-1.jpg', alt: 'Rénovation extérieure' },
    { src: '/images/renovation-2.jpg', alt: 'Rénovation intérieure' },
    { src: '/images/renovation-3.jpg', alt: 'Détail rénovation' },
    { src: '/images/renovation-4.jpg', alt: 'Finition rénovation' },
  ]

  return (
    <>
      <PageIntro
        eyebrow="Service · 02"
        title="Rénovation"
        imageSrc="/media/texture-wood.jpg"
        alt="Charpente bois en rénovation"
        caption="Notre équipe possède l'expertise pour réaliser tous vos projets — extérieur, toiture, intérieur."
      />

      <section className="bg-ink text-concrete-50 px-5 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <SectionLabel number="—" label="Approche" />
          </div>
          <div className="md:col-span-8">
            <RevealText
              text="Notre équipe possède l'expertise pour réaliser tous vos projets!"
              as="h2"
              className="font-anton uppercase text-massive tracking-tightest leading-[1.05]"
              stagger={0.04}
            />
            <Reveal delay={0.4}>
              <p className="mt-10 text-lg text-concrete-200 leading-relaxed max-w-2xl">
                Nous serons présents pour vous conseiller dans les choix qui
                s&apos;offriront à vous, en considérant vos besoins, vos goûts,
                ainsi que votre budget. Voici quelques-uns des travaux que
                notre équipe est en mesure d&apos;effectuer&nbsp;:
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-concrete-50 px-5 md:px-10 pb-24 md:pb-32">
        <div className="border-t border-concrete-50/15">
          {sections.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.05}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 md:py-12 border-b border-concrete-50/15 group"
            >
              <div className="md:col-span-1 flex md:justify-start items-start">
                <span className="eyebrow font-mono text-safety">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-anton uppercase text-3xl md:text-4xl tracking-tight leading-tight group-hover:text-safety transition-colors duration-300">
                  {s.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-concrete-200 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
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
