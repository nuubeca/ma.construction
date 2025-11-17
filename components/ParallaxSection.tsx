'use client'

interface ParallaxSectionProps {
  imageUrl: string
  alt: string
  minHeight?: string
  children?: React.ReactNode
}

export default function ParallaxSection({ 
  imageUrl, 
  alt, 
  minHeight = '380px',
  children 
}: ParallaxSectionProps) {
  return (
    <div 
      className="relative overflow-hidden bg-gray-900"
      style={{ minHeight }}
    >
      {/* Desktop: Parallax effect with fixed attachment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 hidden md:block"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Mobile: Normal background without parallax for better performance */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 md:hidden"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

