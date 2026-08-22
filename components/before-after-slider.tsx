'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { Sparkles, SlidersHorizontal, ArrowLeftRight, Check } from 'lucide-react'
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
    beforeImage: '/images/raw/img-10.jpeg', // Ham vadi manzarası
    afterImage: '/images/raw/img-4.jpeg',  // Farah lüks kır/vadi düğünü kurulumu
    description: 'Ham vadi zemininden peri bacaları önünde ışık ve çiçek sütunlarıyla donatılmış masalsı bir nikah ve seremoni alanına dönüşüm.',
  },
  {
    id: '2',
    title: 'Boş Salon & Teras Dönüşümü',
    location: 'Kapadokya Otel Terası, Ürgüp / Nevşehir',
    beforeImage: '/images/raw/img-7.jpeg',
    afterImage: '/images/raw/img-11.jpeg',
    description: 'Sıradan boş alandan kristal şamdanlar, Napolyon sandalyeler ve aynalı masa giydirmeleri ile saray ışıltısında gala konseptine dönüşüm.',
  },
]

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const activeItem = COMPARISONS[activeIndex]

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100
    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100
    setSliderPosition(percentage)
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true)
    try {
      e.currentTarget.setPointerCapture(e.pointerId)
    } catch {
      // ignore
    }
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }
  }

  return (
    <section id="mekan-donusum" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/40 border-y border-border/60">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <SlidersHorizontal className="size-3.5" />
            <span>Mekân Dönüşüm Gücümüz</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Öncesi & Sonrası Dönüşüm
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Boş bir mekanı veya vadiyi nasıl büyüleyici bir davet alanına dönüştürdüğümüzü görmek için tutamacı parmağınızla veya farenizle sağa-sola kaydırın.
          </p>
        </Reveal>

        {/* Tab switcher */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {COMPARISONS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setActiveIndex(idx)
                setSliderPosition(50)
              }}
              className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 font-medium ${
                activeIndex === idx
                  ? 'bg-olive text-olive-foreground shadow-md'
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
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="arch-lg relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden select-none cursor-ew-resize bg-muted touch-none"
              style={{ touchAction: 'none' }}
            >
              {/* 1. AFTER IMAGE (Full Base Layer) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={activeItem.afterImage}
                  alt={`${activeItem.title} - Farah Dokunuşu Sonrası`}
                  fill
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="object-cover pointer-events-none select-none"
                  priority
                />
                <div className="absolute top-4 right-4 z-10 bg-olive/95 text-olive-foreground px-3.5 py-1.5 rounded-full text-[0.65rem] sm:text-xs uppercase tracking-widest font-semibold shadow-lg backdrop-blur-md flex items-center gap-1.5 pointer-events-none">
                  <Sparkles className="size-3" />
                  <span>Farah Sonrası</span>
                </div>
              </div>

              {/* 2. BEFORE IMAGE (Clipped Layer using CSS clip-path for zero distortion) */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none select-none"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                  WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              >
                <Image
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} - Kurulum Öncesi Ham Alan`}
                  fill
                  sizes="(min-width: 1024px) 80vw, 95vw"
                  className="object-cover pointer-events-none select-none"
                  priority
                />
                <div className="absolute top-4 left-4 z-10 bg-black/75 text-white px-3.5 py-1.5 rounded-full text-[0.65rem] sm:text-xs uppercase tracking-widest font-semibold shadow-lg backdrop-blur-md pointer-events-none">
                  <span>Ham Mekan (Öncesi)</span>
                </div>
              </div>

              {/* 3. Divider Line & Interactive Knob */}
              <div
                className="absolute top-0 bottom-0 w-0.75 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-11 rounded-full bg-white text-stone-900 shadow-2xl border border-stone-200 flex items-center justify-center text-xs font-bold ring-4 ring-black/20 hover:scale-110 transition-transform">
                  <ArrowLeftRight className="size-4 text-olive" />
                </div>
              </div>
            </div>

            {/* Information Footer */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2">
              <div>
                <h3 className="font-serif text-xl text-foreground font-medium">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-olive uppercase tracking-widest font-semibold mt-0.5">
                  {activeItem.location}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-2xl leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 bg-olive/10 border border-olive/20 text-olive px-4 py-2 rounded-full text-xs font-semibold">
                <Check className="size-3.5 stroke-[3]" />
                <span>%100 Mekan Dönüşüm Güvencesi</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
