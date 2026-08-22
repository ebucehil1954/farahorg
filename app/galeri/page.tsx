import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { ContactFooter } from '@/components/contact-footer'
import { Reveal } from '@/components/reveal'
import { FilterableCatalog } from '@/components/filterable-catalog'
import { FloatingActionBar } from '@/components/floating-action-bar'
import { Sparkles, Building2, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Konsept & Galeri Kataloğu | Farah Organizasyon Nevşehir Kapadokya',
  description:
    'Nevşehir Kapadokya, Ürgüp, Göreme, Avanos, Aksaray ve Niğde bölgelerinde gerçekleştirdiğimiz düğün, kına, nişan, bride party, açılış ve doğum günü konsept seçkileri.',
}

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-28 pb-20 sm:pt-36">
        {/* Header */}
        <section className="px-5 sm:px-8 text-center max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
              <Link href="/" className="hover:text-olive transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Katalog & Galeri</span>
            </div>
            <span className="font-script text-olive text-3xl sm:text-4xl italic">
              Gerçekleştirdiğimiz Seçkiler
            </span>
            <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-balance font-normal">
              Ürün & Konsept Kataloğu
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Düğün, kına, söz-nişan, açılış, doğum günü, bride party ve davet konseptlerimizden imza kareler. Kategori ve mekan türüne göre süzerek paket detaylarını inceleyebilirsiniz.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <Sparkles className="size-3.5 text-olive" />
                <span>25+ İmza Konsept</span>
              </span>
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <Building2 className="size-3.5 text-olive" />
                <span>Kişiselleştirilebilir Detaylar</span>
              </span>
              <span className="bg-card border border-border/80 px-4 py-1.5 rounded-full text-foreground/80 flex items-center gap-1.5 shadow-sm">
                <MapPin className="size-3.5 text-olive" />
                <span>Nevşehir & Kapadokya</span>
              </span>
            </div>
          </Reveal>
        </section>

        {/* Multi-Dimensional Filterable Catalog */}
        <FilterableCatalog />
      </main>

      <ContactFooter />
      <FloatingActionBar />
    </>
  )
}
