import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

import { SERVICE_CATEGORIES } from '@/lib/services-data'
import { SiteNav } from '@/components/site-nav'
import { ContactFooter } from '@/components/contact-footer'
import { Reveal } from '@/components/reveal'
import { FloatingActionBar } from '@/components/floating-action-bar'

export const metadata = {
  title: 'Hizmetlerimiz & Paket Kapsamları | Farah Organizasyon Nevşehir Kapadokya',
  description:
    'Düğün, Kına Gecesi, Söz Nişan, Bride Party, Doğum Günü, Açılış, Masa Sandalye Kiralama ve Özel Davet organizasyonu hizmetlerimiz ve paket içerikleri.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-24 pb-20 sm:pt-32">
        {/* Header section */}
        <section className="px-5 sm:px-8 text-center max-w-4xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
              <Sparkles className="size-3.5" />
              <span>Nevşehir & Kapadokya Hizmetlerimiz</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-balance">
              Hizmetlerimiz & Paket Kapsamları
            </h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Nevşehir, Kapadokya ve çevre illerde sunduğumuz 8 temel organizasyon hizmetimiz ve şeffaf paket checklist'i.
            </p>
            <span
              aria-hidden="true"
              className="via-border mx-auto mt-8 block h-px w-24 bg-gradient-to-r from-transparent to-transparent"
            />
          </Reveal>
        </section>

        {/* Services Grid */}
        <section className="mt-16 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 md:grid-cols-2">
              {SERVICE_CATEGORIES.map((service, idx) => (
                <Reveal key={service.slug} delay={idx * 60}>
                  <article className="group flex flex-col h-full bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-olive/50 transition-all duration-500">
                    <div className="arch bg-muted relative aspect-16/10 overflow-hidden m-4 mb-0">
                      <Image
                        src={service.heroImage}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 95vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      />
                      <span className="font-script text-champagne absolute inset-x-0 bottom-4 text-center text-2xl italic">
                        {service.script}
                      </span>
                    </div>

                    <div className="p-7 flex flex-col justify-between flex-grow">
                      <div>
                        <h2 className="font-serif text-2xl text-foreground font-medium">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-xs text-olive uppercase tracking-widest font-semibold">
                          {service.subtitle}
                        </p>
                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {service.shortDescription}
                        </p>

                        {/* Included checklist snippet */}
                        <div className="mt-6 border-t border-border/60 pt-5">
                          <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
                            Öne Çıkan Paket Malzemeleri & Hizmetler:
                          </span>
                          <ul className="space-y-2">
                            {service.packageChecklist.slice(0, 5).map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2.5 text-xs text-foreground/90"
                              >
                                <span className="size-4 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                                  <Check className="size-3 stroke-[3]" />
                                </span>
                                <span>{item.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between gap-4">
                        <span className="text-xs text-muted-foreground italic">
                          * Nevşehir & çevre illere yerinde kurulum
                        </span>
                        <Link
                          href={`/hizmetler/${service.slug}`}
                          className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-2 rounded-full py-3 px-6 text-xs uppercase tracking-widest transition-colors duration-300 shadow-sm font-semibold"
                        >
                          <span>Paketi İncele</span>
                          <ArrowRight className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
