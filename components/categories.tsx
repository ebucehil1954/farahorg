import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { SERVICE_CATEGORIES } from '@/lib/services-data'
import { Reveal } from '@/components/reveal'

export function Categories() {
  return (
    <section id="hizmetler" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[0.62rem] tracking-[0.42em] uppercase">
            Hizmet Kategorilerimiz
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
            Her tören için
            <span className="font-script ml-2.5 italic">kendine has</span> bir
            dil
          </h2>
          <span
            aria-hidden="true"
            className="via-border mx-auto mt-7 block h-px w-16 bg-gradient-to-r from-transparent to-transparent"
          />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 100} className="group">
              <article className="flex flex-col h-full justify-between bg-card border border-border/70 rounded-3xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="arch bg-muted relative aspect-3/4 overflow-hidden shadow-md">
                    <Image
                      src={c.heroImage}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[oklch(0.25_0.04_39)]/60 via-transparent to-transparent"
                    />
                    <span className="font-script text-champagne absolute inset-x-0 bottom-6 text-center text-xl italic">
                      {c.script}
                    </span>
                    <span className="absolute top-3 right-3 bg-black/60 text-champagne text-[0.62rem] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                      ₺{c.priceStartingFrom.toLocaleString('tr-TR')}'den
                    </span>
                  </div>

                  <div className="px-2 pt-6 text-center">
                    <h3 className="font-serif text-[1.4rem] tracking-wide">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground mx-auto mt-2.5 max-w-xs text-xs leading-relaxed text-pretty line-clamp-3">
                      {c.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-6 text-center">
                  <Link
                    href={`/hizmetler/${c.slug}`}
                    className="text-foreground/80 hover:text-olive inline-flex items-center gap-2 border-b border-current pb-1 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-300 font-medium"
                  >
                    <span>Paket & Dahil Olanlar</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 text-center">
          <Link
            href="/hizmetler"
            className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-3 rounded-full px-10 py-4 text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300 shadow-md"
          >
            <span>Tüm Paket Listesini ve Şeffaf İçerikleri İnceleyin</span>
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
