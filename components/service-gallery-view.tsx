'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ImageLightbox } from '@/components/image-lightbox'
import { Reveal } from '@/components/reveal'

interface GalleryItem {
  src: string
  alt: string
  title: string
  location?: string
}

export function ServiceGalleryView({ images }: { images: GalleryItem[] }) {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  )

  const lightboxImages = images.map((img, i) => ({
    id: i + 1,
    src: img.src,
    alt: img.alt,
    title: img.title,
  }))

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item, index) => (
          <Reveal key={index} delay={index * 110}>
            <div
              onClick={() => setActiveLightboxIndex(index)}
              className="group cursor-pointer"
            >
              <div className="arch bg-muted relative aspect-4/5 overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <span className="bg-white/90 text-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm shadow-md">
                    Büyüt
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between px-1">
                <h3 className="font-serif text-lg text-foreground">
                  {item.title}
                </h3>
                {item.location && (
                  <span className="text-[0.65rem] tracking-widest text-muted-foreground uppercase">
                    {item.location}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </>
  )
}
