import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
  link: string
  highlighted?: boolean
}

export default function ServiceCard({ 
  title, 
  description, 
  imageUrl, 
  link,
  highlighted = false 
}: ServiceCardProps) {
  return (
    <div className={`bg-white rounded-lg overflow-hidden ${highlighted ? 'shadow-2xl' : 'shadow-lg'} transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
      <div className="relative h-64">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white font-anton">
          {title}
        </h3>
        <Link 
          href={link}
          className="absolute top-1/2 right-4 -translate-y-1/2 w-14 h-14 bg-amber-400 hover:bg-amber-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse hover:animate-none"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>
      <div className="p-6 text-gray-800">
        <p>{description}</p>
      </div>
    </div>
  )
}

