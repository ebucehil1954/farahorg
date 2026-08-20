import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

import { SERVICE_CATEGORIES } from '@/lib/services-data'
import { Reveal } from '@/components/reveal'

export function Categories() {
  return (
    <section id="hizmetler" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Sparkles className="size-3.5" />
            <span>Hizmetlerimiz</span>
          </div>
          <h2 className="font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
            Her Tören İçin
            <span className="font-script ml-2.5 italic text-olive">Size Özel</span> Bir
            Atmosfer
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Düğün, kına, söz-nişan, açılış, doğum günü ve özel davetleriniz için özenle tasarladığımız hizmet paketlerimiz.
          </p>
          <span
            aria-hidden="true"
            className="via-border mx-auto mt-7 block h-px w-16 bg-gradient-to-r from-transparent to-transparent"
          />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_CATEGORIES.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 70} className="group">
              <article className="flex flex-col h-full justify-between bg-card border border-border/70 rounded-3xl p-4 shadow-sm hover:shadow-xl hover:border-olive/40 transition-all duration-300">
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
                      className="absolute inset-0 bg-gradient-to-t from-[oklch(0.25_0.04_39)]/65 via-transparent to-transparent"
                    />
                    <span className="font-script text-champagne absolute inset-x-0 bottom-5 text-center text-xl italic">
                      {c.script}
                    </span>
                  </div>

                  <div className="px-2 pt-5 text-center">
                    <h3 className="font-serif text-[1.25rem] tracking-wide font-medium text-foreground">
                      {c.title}
                    </h3>
                    <p className="text-muted-foreground mx-auto mt-2 text-xs leading-relaxed text-pretty line-clamp-3">
                      {c.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="pt-5 text-center">
                  <Link
                    href={`/hizmetler/${c.slug}`}
                    className="text-olive hover:text-olive/80 inline-flex items-center gap-2 border-b border-olive/40 pb-1 text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-300 font-semibold"
                  >
                    <span>Paket & Detayları İncele</span>
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
            className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs tracking-[0.24em] uppercase transition-colors duration-300 shadow-md font-medium"
          >
            <span>Tüm Hizmet Paketlerimizi ve Detayları İnceleyin</span>
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
