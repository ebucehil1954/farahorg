import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { ContactFooter } from '@/components/contact-footer'
import { Reveal } from '@/components/reveal'
import { FilterableCatalog } from '@/components/filterable-catalog'
import { FloatingActionBar } from '@/components/floating-action-bar'
import { Sparkles, ArrowRight, MapPin, Building2 } from 'lucide-react'

export const metadata = {
  title: 'Tasarım & Konsept Kataloğu | Farah Organizasyon Nevşehir Kapadokya',
  description:
    'Nevşehir Kapadokya, Ürgüp, Göreme, Avanos, Aksaray ve Niğde bölgeleri için düğün, kına, nişan, bride party, açılış ve doğum günü konsept seçkileri. Kategori ve mekana göre filtreleyin.',
}

export default function KatalogPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-28 pb-20 sm:pt-36">
        {/* Editorial Page Header */}
        <section className="px-5 sm:px-8 text-center max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
              <Link href="/" className="hover:text-olive transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Tasarım Kataloğu</span>
            </div>
            
            <span className="font-script text-olive text-3xl sm:text-4xl italic">
              Zarafet ve Estetik Seçkisi
            </span>
            
            <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-balance font-normal">
              Tasarım & Konsept Kataloğumuz
            </h1>
            
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-pretty">
              Düğün, kına, söz-nişan, açılış, doğum günü ve davet konseptlerimiz için hazırladığımız özgün tasarımları keşfedin. Hizmet türüne ve mekanına göre filtreleyerek pakete dahil ekipmanları şeffafça inceleyebilirsiniz.
            </p>

            {/* Quick Feature Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="size-3.5 text-olive" />
                <span>25+ Özel İmza Konsept</span>
              </span>
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <Building2 className="size-3.5 text-olive" />
                <span>Her Mekana Uyumlu Modüller</span>
              </span>
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <MapPin className="size-3.5 text-olive" />
                <span>Tüm Nevşehir, Kapadokya & Çevre İller</span>
              </span>
            </div>
          </Reveal>
        </section>

        {/* Filterable Catalog Component */}
        <FilterableCatalog />

        {/* Custom Concept Invitation Banner */}
        <section className="px-5 sm:px-8 mt-16 max-w-7xl mx-auto">
          <Reveal className="bg-terracotta text-terracotta-foreground rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-terracotta-foreground/80 font-semibold block mb-2">
                Hayalinizdeki Özel Konsepti Bulamadınız mı?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight">
                Tamamen Size ve Mekanınıza Özel Konsept Tasarlayalım
              </h2>
              <p className="mt-3 text-terracotta-foreground/80 text-sm leading-relaxed">
                Pinterest veya Instagram'da beğendiğiniz herhangi bir dekorasyonu ekibimize iletin; mekanınıza birebir uyarlayarak sıfırdan hayata geçirelim.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/#hizli-teklif"
                className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-4 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2.5 transition-all shadow-lg hover:scale-105"
              >
                <span>Özel Teklif Alın</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
