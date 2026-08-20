import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  Flower2,
  Palette,
  Camera,
  Utensils,
  Music,
  Flame,
  MapPin,
  Compass,
  ShieldCheck,
  Gift,
  PartyPopper,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Check,
  Plus,
  Sliders,
  MessageCircle,
} from 'lucide-react'

import { SERVICE_CATEGORIES, ServiceCategory } from '@/lib/services-data'
import { SiteNav } from '@/components/site-nav'
import { ContactFooter } from '@/components/contact-footer'
import { Reveal } from '@/components/reveal'
import { ServiceGalleryView } from '@/components/service-gallery-view'
import { FloatingActionBar } from '@/components/floating-action-bar'

const iconMap = {
  Sparkles,
  Flower2,
  Palette,
  Camera,
  Utensils,
  Music,
  Flame,
  MapPin,
  Compass,
  ShieldCheck,
  Gift,
  PartyPopper,
}

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICE_CATEGORIES.find((s) => s.slug === slug)

  if (!service) {
    return { title: 'Hizmet Bulunamadı | Farah Organizasyon' }
  }

  return {
    title: `${service.title} | Nevşehir Kapadokya Farah Organizasyon`,
    description: service.shortDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const serviceIndex = SERVICE_CATEGORIES.findIndex((s) => s.slug === slug)

  if (serviceIndex === -1) {
    notFound()
  }

  const service: ServiceCategory = SERVICE_CATEGORIES[serviceIndex]
  const prevService =
    SERVICE_CATEGORIES[
      (serviceIndex - 1 + SERVICE_CATEGORIES.length) % SERVICE_CATEGORIES.length
    ]
  const nextService =
    SERVICE_CATEGORIES[(serviceIndex + 1) % SERVICE_CATEGORIES.length]

  const whatsappUrl = `https://wa.me/905300000000?text=${encodeURIComponent(
    `Merhaba Farah Organizasyon! "${service.title}" paketiniz hakkında konsept detayları, müsaitlik ve teklif bilgisi almak istiyorum.`
  )}`

  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-24 pb-16 sm:pt-32">
        {/* Breadcrumb & Subtitle Header */}
        <section className="px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Link href="/" className="hover:text-olive transition-colors">
                  Anasayfa
                </Link>
                <span>/</span>
                <Link
                  href="/hizmetler"
                  className="hover:text-olive transition-colors"
                >
                  Hizmetlerimiz
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">
                  {service.title}
                </span>
              </div>
            </Reveal>

            {/* Service Banner */}
            <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
              <Reveal className="lg:col-span-7">
                <span className="font-script text-olive text-2xl italic sm:text-3xl">
                  {service.script}
                </span>
                <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-balance leading-[1.12]">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg font-serif italic text-muted-foreground">
                  {service.subtitle}
                </p>
                <p className="mt-6 text-foreground/85 leading-relaxed max-w-2xl text-base sm:text-lg">
                  {service.longDescription}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-semibold transition-all shadow-md"
                  >
                    <MessageCircle className="size-4 fill-current" />
                    <span>WhatsApp ile Teklif Al</span>
                  </a>
                  <a
                    href="/#hesaplayici"
                    className="border border-olive text-olive hover:bg-olive/10 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold transition-colors"
                  >
                    <Sliders className="size-4" />
                    <span>Paket Planlayıcı</span>
                  </a>
                </div>
              </Reveal>

              {/* Signature Arch Banner */}
              <Reveal className="lg:col-span-5" delay={150}>
                <div className="arch-lg bg-muted relative aspect-4/5 overflow-hidden shadow-2xl">
                  <Image
                    src={service.heroImage}
                    alt={service.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 92vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                  />
                  <span className="font-script text-champagne absolute inset-x-0 bottom-6 text-center text-2xl italic">
                    {service.script}
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Package Checklist (Dahil olanlar & Opsiyoneller) */}
        {service.packageChecklist && service.packageChecklist.length > 0 && (
          <section className="mt-20 px-5 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <Reveal className="bg-card border border-border/80 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-8">
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-olive font-semibold">
                      Şeffaf Paket İçeriği
                    </span>
                    <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-medium text-foreground">
                      {service.title} Paket Detayları
                    </h2>
                  </div>
                  <span className="text-xs text-muted-foreground italic">
                    * Tüm malzemeler ve yerinde kurulum ekibimiz tarafından sağlanır
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
                  {service.packageChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-2xl border flex items-center justify-between text-xs transition-colors ${
                        item.included
                          ? 'border-emerald-500/30 bg-emerald-500/5 text-foreground'
                          : 'border-amber-500/30 bg-amber-500/5 text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`size-5 rounded-full flex items-center justify-center shrink-0 ${
                            item.included
                              ? 'bg-emerald-600 text-white'
                              : 'bg-amber-500 text-white'
                          }`}
                        >
                          {item.included ? (
                            <Check className="size-3 stroke-[3]" />
                          ) : (
                            <Plus className="size-3 stroke-[3]" />
                          )}
                        </span>
                        <span className="font-medium text-sm">{item.name}</span>
                      </div>
                      {item.note && (
                        <span className="text-[0.65rem] uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-semibold shrink-0 ml-2">
                          {item.note}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Service Areas (e.g. for Masa Sandalye Kiralama) */}
                {service.serviceAreas && service.serviceAreas.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border/60">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
                      💐 Kullanım Alanları:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.serviceAreas.map((area, i) => (
                        <span
                          key={i}
                          className="bg-olive/10 border border-olive/20 text-olive text-xs font-semibold px-3.5 py-1 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        )}

        {/* Aesthetic Breakdown Cards */}
        <section className="mt-20 bg-secondary/40 border-y border-border/60 py-20 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                Tasarım Detayları & Unsurlar
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Konsept Unsurları & Özellikler
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.aestheticCues.map((cue, idx) => (
                <Reveal key={cue.title} delay={idx * 80}>
                  <div className="bg-card border border-border/80 rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-[0.68rem] tracking-widest text-olive uppercase font-bold">
                        {cue.title}
                      </span>
                      <h3 className="font-serif text-xl mt-2 text-foreground font-medium">
                        {cue.value}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                        {cue.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hizmet Kapsamı (What's Included) */}
        <section id="hizmet-kapsami" className="py-24 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-olive font-semibold">
                Operasyon & Kurulum
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl">
                Hizmet Kapsamı & Süreç
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                {service.title} için sunduğumuz profesyonel adımlar ve operasyonel destek.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {service.includes.map((inc, i) => {
                const IconComponent = iconMap[inc.iconName] || Sparkles
                return (
                  <Reveal key={inc.title} delay={i * 80}>
                    <div className="group border border-border bg-card/60 hover:bg-card hover:border-olive/50 rounded-2xl p-8 transition-all duration-300">
                      <div className="size-12 rounded-xl bg-olive/10 text-olive flex items-center justify-center group-hover:bg-olive group-hover:text-olive-foreground transition-colors duration-300">
                        <IconComponent className="size-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-xl mt-6 text-foreground font-medium">
                        {inc.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {inc.description}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Dedicated Service Gallery */}
        {service.galleryImages && service.galleryImages.length > 0 && (
          <section className="bg-secondary/40 border-y border-border/60 py-24 px-5 sm:px-8">
            <div className="mx-auto max-w-7xl">
              <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <span className="font-script text-olive text-2xl italic">
                    İlham Galerisi
                  </span>
                  <h2 className="mt-2 font-serif text-3xl sm:text-4xl">
                    {service.title} Seçkileri
                  </h2>
                </div>
                <Link
                  href="/galeri"
                  className="text-xs uppercase tracking-widest text-olive hover:underline inline-flex items-center gap-2 font-semibold"
                >
                  <span>Tüm Kataloğu İncele</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Reveal>

              <ServiceGalleryView images={service.galleryImages} />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {service.faq && service.faq.length > 0 && (
          <section className="py-24 px-5 sm:px-8">
            <div className="mx-auto max-w-4xl">
              <Reveal className="text-center mb-14">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">
                  Sıkça Sorulan Sorular
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                  Merak Edilenler
                </h2>
              </Reveal>

              <div className="space-y-6">
                {service.faq.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 70}>
                    <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8">
                      <h3 className="font-serif text-lg sm:text-xl text-foreground">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next / Prev Service Navigation */}
        <section className="border-t border-border/60 py-16 px-5 sm:px-8">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href={`/hizmetler/${prevService.slug}`}
              className="flex items-center gap-4 text-left group"
            >
              <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:border-olive group-hover:bg-olive/10 transition-colors">
                <ArrowLeft className="size-4 text-olive" />
              </div>
              <div>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground block">
                  Önceki Hizmet
                </span>
                <span className="font-serif text-base text-foreground group-hover:text-olive transition-colors font-medium">
                  {prevService.title}
                </span>
              </div>
            </Link>

            <Link
              href="/hizmetler"
              className="text-xs uppercase tracking-widest text-olive hover:underline font-semibold"
            >
              Tüm Hizmetler Listesi
            </Link>

            <Link
              href={`/hizmetler/${nextService.slug}`}
              className="flex items-center gap-4 text-right group"
            >
              <div>
                <span className="text-[0.65rem] uppercase tracking-widest text-muted-foreground block">
                  Sonraki Hizmet
                </span>
                <span className="font-serif text-base text-foreground group-hover:text-olive transition-colors font-medium">
                  {nextService.title}
                </span>
              </div>
              <div className="size-10 rounded-full border border-border flex items-center justify-center group-hover:border-olive group-hover:bg-olive/10 transition-colors">
                <ArrowRight className="size-4 text-olive" />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
