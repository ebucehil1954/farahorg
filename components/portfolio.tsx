'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Eye } from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { ImageLightbox } from '@/components/image-lightbox'

const works = [
  {
    image: '/images/raw/img-4.jpeg',
    alt: 'Kapadokya peri bacaları manzaralı kır düğününde, taze çiçekler ve mumlarla bezenmiş ziyafet masası',
    title: 'Kapadokya Masalı',
    place: 'Göreme, Nevşehir',
    category: 'Düğün',
  },
  {
    image: '/images/raw/img-1.jpeg',
    alt: 'Beyaz kağıt çiçekler ve neon ışıkla süslenmiş yuvarlak arka planlı modern nişan masası dekorasyonu',
    title: 'Şampanya Nişan',
    place: 'Nevşehir Merkez',
    category: 'Nişan',
  },
  {
    image: '/images/raw/img-21.jpeg',
    alt: 'Kırmızı kadife taht, kırmızı güllerden kemer ve kına gecesi neon yazısı ile hazırlanmış kına köşesi',
    title: 'Saray Kına Gecesi',
    place: 'Aksaray Salon',
    category: 'Kına Gecesi',
  },
  {
    image: '/images/raw/img-10.jpeg',
    alt: 'Kızılçukur vadisinde ahşap çardak ve mermer masa üzerine kurulmuş lüks piknik ve teklif alanı',
    title: 'Kızılçukur Vadi Teklifi',
    place: 'Kızılçukur Vadisi, Ürgüp',
    category: 'Kapadokya Özel',
  },
  {
    image: '/images/raw/img-11.jpeg',
    alt: 'Doğada kristal şamdanlar ve Napolyon sandalyeler ile kurulmuş lüks gala yemeği',
    title: 'Lüks Balo Gala Yemeği',
    place: 'Kayseri',
    category: 'Düğün',
  },
  {
    image: '/images/raw/img-6.jpeg',
    alt: 'Pastel çiçekler ve şeffaf akrilik isimlikle süslenmiş butik ev söz masası',
    title: 'Butik Ev Sözü',
    place: 'Niğde',
    category: 'Söz',
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
      className="bg-secondary/60 border-border/60 border-y px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-script text-olive text-2xl italic sm:text-[1.7rem]">
              İlham Veren Anlar
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
              Gerçekleştirdiğimiz Seçkiler
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <p className="text-muted-foreground max-w-sm text-[0.92rem] leading-relaxed text-pretty md:text-right">
              Nevşehir, Kapadokya, Kayseri, Aksaray ve Niğde bölgesinde hayata geçirdiğimiz imza projeler.
            </p>
            <Link
              href="/galeri"
              className="text-olive hover:underline text-xs tracking-widest uppercase font-medium inline-flex items-center gap-2"
            >
              <span>Tüm Kataloğu Gör (25 Fotoğraf)</span>
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 100} className="group">
              <figure
                onClick={() => setActiveLightboxIndex(i)}
                className="cursor-pointer"
              >
                <div className="arch-lg bg-muted relative aspect-4/5 overflow-hidden shadow-lg border border-border/40">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="bg-white/90 text-foreground px-5 py-2 rounded-full text-xs uppercase tracking-widest backdrop-blur-sm flex items-center gap-2">
                      <Eye className="size-4" />
                      <span>İncele</span>
                    </span>
                  </div>
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 px-1">
                  <div>
                    <span className="font-serif text-lg block">{w.title}</span>
                    <span className="text-olive text-xs font-script italic">
                      {w.category}
                    </span>
                  </div>
                  <span className="text-muted-foreground text-[0.62rem] tracking-[0.2em] uppercase">
                    {w.place}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 text-center lg:mt-12">
          <Link
            href="/galeri"
            className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-3 rounded-full px-10 py-4 text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300"
          >
            <span>Filtrelenebilir Kataloğa Git</span>
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
