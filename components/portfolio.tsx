'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Eye, Sparkles, MapPin } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { ImageLightbox } from '@/components/image-lightbox'

const works = [
  {
    image: '/images/raw/img-4.jpeg',
    alt: 'Kır düğününde taze çiçekler ve mumlarla bezenmiş ziyafet masası',
    title: 'Kır Düğünü Seremonisi',
    place: 'Göreme, Kapadokya',
    category: 'Düğün',
  },
  {
    image: '/images/raw/img-1.jpeg',
    alt: 'Pleksi fonlu modern nişan masası dekorasyonu',
    title: 'Şampanya Pleksi Nişan Fonu',
    place: 'Nevşehir Merkez',
    category: 'Söz & Nişan',
  },
  {
    image: '/images/raw/img-21.jpeg',
    alt: 'Kırmızı kadife taht ve kına gecesi dekoru',
    title: 'Saray Kına Gecesi Tahtı',
    place: 'Aksaray',
    category: 'Kına Gecesi',
  },
  {
    image: '/images/raw/img-12.jpeg',
    alt: 'Bride to be parti masası',
    title: 'Bride Party Kutlama Alanı',
    place: 'Ürgüp, Kapadokya',
    category: 'Bride Party',
  },
  {
    image: '/images/raw/img-11.jpeg',
    alt: 'Kristal şamdanlar ve Napolyon sandalyeler ile gala yemeği',
    title: 'Lüks Balo Gala Yemeği',
    place: 'Nevşehir',
    category: 'Düğün',
  },
  {
    image: '/images/raw/img-6.jpeg',
    alt: 'Pastel çiçekler ve akrilik isimlikle butik ev söz masası',
    title: 'Butik Ev Sözü Kurgusu',
    place: 'Niğde',
    category: 'Söz & Nişan',
  },
]

export function Portfolio() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  )

  const lightboxImages = works.map((w, i) => ({
    id: i + 1,
    src: w.image,
    alt: w.alt,
    title: w.title,
    categoryName: w.category,
  }))

  return (
    <section
      id="portfolyo"
      className="bg-secondary/40 border-border/70 border-y px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1 text-xs text-olive uppercase tracking-widest font-medium mb-3">
              <Sparkles className="size-3.5" />
              <span>İmza Projelerimiz</span>
            </div>
            <h2 className="mt-1 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
              Gerçekleştirdiğimiz Seçkiler
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-muted-foreground max-w-sm text-[0.92rem] leading-relaxed text-pretty md:text-right">
              Nevşehir, Kapadokya, Aksaray, Niğde ve Kırşehir genelinde hayata geçirdiğimiz lüks organizasyon anları.
            </p>
            <Link
              href="/katalog"
              className="text-olive hover:underline text-xs tracking-widest uppercase font-semibold inline-flex items-center gap-2"
            >
              <span>Tüm Tasarım Kataloğunu İncele</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 80} className="group">
              <figure
                onClick={() => setActiveLightboxIndex(i)}
                className="cursor-pointer"
              >
                <div className="arch-lg bg-muted relative aspect-4/5 overflow-hidden shadow-lg border border-border/50">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="bg-white/95 text-foreground px-5 py-2.5 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm flex items-center gap-2 font-semibold shadow-xl">
                      <Eye className="size-4" />
                      <span>Detaylı İncele</span>
                    </span>
                  </div>
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 px-1">
                  <div>
                    <span className="font-serif text-lg block font-medium">{w.title}</span>
                    <span className="text-olive text-xs font-script italic">
                      {w.category}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[0.68rem] tracking-[0.16em] uppercase font-medium flex items-center gap-1">
                    <MapPin className="size-3 text-olive" />
                    <span>{w.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {/* Big CTA Banner linking to Catalog */}
        <Reveal className="mt-16 text-center">
          <Link
            href="/katalog"
            className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-300 shadow-lg font-semibold hover:scale-[1.02]"
          >
            <span>Filtrelenebilir Tasarım Kataloğumuzu Keşfedin (25+ Görsel)</span>
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <ImageLightbox
        images={lightboxImages}
        currentIndex={activeLightboxIndex}
        onClose={() => setActiveLightboxIndex(null)}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  )
}
