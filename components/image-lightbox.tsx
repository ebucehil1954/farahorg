'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface LightboxImage {
  id: number
  src: string
  alt: string
  title: string
  categoryName?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  currentIndex: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length)
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex, images.length, onClose, onNavigate])

  if (currentIndex === null || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label="Görsel Detayı"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Kapat"
        className="absolute top-5 right-5 z-50 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X className="size-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={() =>
            onNavigate((currentIndex - 1 + images.length) % images.length)
          }
          aria-label="Önceki Görsel"
          className="absolute left-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:left-8"
        >
          <ChevronLeft className="size-7" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          aria-label="Sonraki Görsel"
          className="absolute right-4 z-50 flex size-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors sm:right-8"
        >
          <ChevronRight className="size-7" />
        </button>
      )}

      {/* Image container */}
      <div className="relative flex max-h-[88vh] max-w-[90vw] flex-col items-center justify-center">
        <div className="relative max-h-[78vh] w-auto overflow-hidden rounded-xl">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1200}
            height={1600}
            className="max-h-[78vh] w-auto max-w-[88vw] object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center text-white">
          {currentImage.categoryName && (
            <span className="font-script text-champagne block text-lg italic">
              {currentImage.categoryName}
            </span>
          )}
          <h3 className="font-serif text-xl tracking-wide">
            {currentImage.title}
          </h3>
          <p className="mt-1 text-xs tracking-widest text-white/60 uppercase">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}
