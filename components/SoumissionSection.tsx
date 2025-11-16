import ParallaxSection from './ParallaxSection'

export default function SoumissionSection() {
  return (
    <ParallaxSection 
      imageUrl="https://ma.construction/images/background2.jpg"
      alt="Background"
      minHeight="300px"
    >
      <div className="container mx-auto px-4 py-24">
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg font-anton">
            Obtenez une soumission gratuite en 48h!
          </h2>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 rounded-full shadow-2xl animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </ParallaxSection>
  )
}

