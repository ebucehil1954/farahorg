'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, SlidersHorizontal } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface ComparisonItem {
  id: string
  title: string
  location: string
  beforeImage: string
  afterImage: string
  description: string
}

const COMPARISONS: ComparisonItem[] = [
  {
    id: '1',
    title: 'Kapadokya Vadi Dönüşümü',
    location: 'Kızılçukur Vadisi, Nevşehir',
    beforeImage: '/images/raw/img-10.jpeg', // Empty/raw landscape view
    afterImage: '/images/raw/img-4.jpeg',  // Full Farah luxury setup
    description: 'Ham vadi zemininden peri bacaları önünde ışık ve çiçek sütunlarıyla donatılmış masalsı nikah alanına dönüşüm.',
  },
  {
    id: '2',
    title: 'Boş Balo Salonu Dönüşümü',
    location: 'Kayseri Balo Salonu',
    beforeImage: '/images/raw/img-7.jpeg',
    afterImage: '/images/raw/img-11.jpeg',
    description: 'Sıradan boş salondan kristal şamdanlar, Napolyon sandalyeler ve aynalı masa giydirmeleri ile saray konseptine dönüşüm.',
  },
]

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const activeItem = COMPARISONS[activeIndex]

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      let percentage = (x / rect.width) * 100
      if (percentage < 0) percentage = 0
      if (percentage > 100) percentage = 100
      setSliderPosition(percentage)
    },
    []
  )

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove])

  return (
    <section id="mekan-donusum" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <SlidersHorizontal className="size-3.5" />
            <span>Mekân Dönüşüm Gücümüz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Öncesi & Sonrası Kaydırıcısı
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Boş bir mekanı veya vadiyi nasıl büyüleyici bir davet alanına dönüştürdüğümüzü görmek için tutamacı sağa ve sola kaydırın.
          </p>
        </Reveal>

        {/* Tab switcher */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {COMPARISONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(idx)
                setSliderPosition(50)
              }}
              className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-olive text-olive-foreground shadow-md font-medium'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Box */}
        <Reveal delay={120} className="mt-10">
          <div className="bg-card border border-border/80 rounded-3xl p-4 sm:p-6 shadow-xl">
            <div
              ref={containerRef}
              onMouseDown={(e) => {
                setIsDragging(true)
                handleMove(e.clientX)
              }}
              onTouchStart={(e) => {
                setIsDragging(true)
                handleMove(e.touches[0].clientX)
              }}
              className="arch-lg relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden select-none cursor-ew-resize bg-muted"
            >
              {/* AFTER IMAGE (Full setup - base layer) */}
              <Image
                src={activeItem.afterImage}
                alt={`${activeItem.title} - Farah Dokunuşu Sonrası`}
                fill
                sizes="(min-width: 1024px) 80vw, 95vw"
                className="object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-10 bg-olive text-olive-foreground px-4 py-1.5 rounded-full text-[0.65rem] uppercase tracking-widest font-medium shadow-md backdrop-blur-sm">
                Farah Dokunuşu Sonrası ✨
              </div>

              {/* BEFORE IMAGE (Raw setup - clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Ham Kurulum Öncesi`}
                  fill
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="object-cover max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                />
                <div className="absolute top-4 left-4 z-10 bg-black/60 text-white px-4 py-1.5 rounded-full text-[0.65rem] uppercase tracking-widest font-medium shadow-md backdrop-blur-sm">
                  Kurulum Öncesi (Ham Mekan)
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-white text-foreground shadow-2xl border border-border flex items-center justify-center text-xs font-bold gap-0.5">
                  <span>‹</span>
                  <span>›</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
              <div>
                <h3 className="font-serif text-xl text-foreground font-medium">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-olive uppercase tracking-widest font-medium mt-0.5">
                  {activeItem.location}
                </p>
                <p className="text-xs text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-olive/10 border border-olive/20 text-olive px-4 py-2 rounded-full text-xs font-medium">
                <Sparkles className="size-3.5" />
                <span>%100 Mekan Dönüşüm Garantisi</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
