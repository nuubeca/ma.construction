'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ImageGridProps {
  images: { src: string; alt: string }[]
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      {images.map((img, index) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: (index % 2) * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative overflow-hidden bg-concrete-100 group ${
            index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  )
}
