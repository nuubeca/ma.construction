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
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

