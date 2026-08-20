import Link from 'next/link'
import { SiteNav } from '@/components/site-nav'
import { ContactFooter } from '@/components/contact-footer'
import { Reveal } from '@/components/reveal'
import { FilterableCatalog } from '@/components/filterable-catalog'
import { FloatingActionBar } from '@/components/floating-action-bar'

export const metadata = {
  title: 'Konsept & Dekor Kataloğu | Farah Organizasyon Nevşehir Kapadokya',
  description:
    'Nevşehir Kapadokya, Kayseri, Aksaray ve Niğde bölgelerinde gerçekleştirdiğimiz düğün, kına, nişan, bride party, açılış ve doğum günü konsept seçkileri.',
}

export default function GalleryPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen pt-24 pb-20 sm:pt-32">
        {/* Header */}
        <section className="px-5 sm:px-8 text-center max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-4">
              <Link href="/" className="hover:text-olive transition-colors">
                Anasayfa
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Katalog & Galeri</span>
            </div>
            <span className="font-script text-olive text-3xl italic">
              Gerçekleştirdiğimiz Seçkiler
            </span>
            <h1 className="mt-2 font-serif text-4xl sm:text-5xl md:text-6xl text-balance">
              Ürün & Konsept Kataloğu
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Düğün, kına, söz-nişan, açılış, doğum günü, bride party ve davet konseptlerimizden imza kareler. Kategori, renk paleti ve mekana göre süzerek paket detaylarını inceleyebilirsiniz.
            </p>
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
