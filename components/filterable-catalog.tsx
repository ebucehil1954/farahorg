'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Filter, Eye, Check, Plus, MessageCircle, X, Sparkles, MapPin } from 'lucide-react'
import { ALL_GALLERY_IMAGES, CatalogImageItem } from '@/lib/services-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = [
  { slug: 'all', title: 'Tüm Hizmetler' },
  { slug: 'dugun', title: 'Düğün' },
  { slug: 'kina', title: 'Kına Gecesi' },
  { slug: 'nisan', title: 'Söz & Nişan' },
  { slug: 'bride-party', title: 'Bride Party' },
  { slug: 'dogum-gunu', title: 'Doğum Günü' },
  { slug: 'acilis', title: 'Açılış' },
  { slug: 'masa-sandalye-kiralama', title: 'Masa & Sandalye' },
  { slug: 'ozel-gun-davet', title: 'Özel Gün & Davet' },
]

const VENUE_OPTIONS = [
  { slug: 'all', title: 'Tüm Mekanlar' },
  { slug: 'ev', title: 'Ev İçi / Butik Salon' },
  { slug: 'bahce', title: 'Bahçe / Kır Alanı' },
  { slug: 'salon', title: 'Balo / Düğün Salonu' },
  { slug: 'teras', title: 'Teras / Mağara / Açık Hava' },
]

export function FilterableCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedVenue, setSelectedVenue] = useState<string>('all')
  const [activeItem, setActiveItem] = useState<CatalogImageItem | null>(null)

  const filteredItems = useMemo(() => {
    return ALL_GALLERY_IMAGES.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.categorySlug === selectedCategory
      const matchVenue = selectedVenue === 'all' || item.venueType === selectedVenue
      return matchCategory && matchVenue
    })
  }, [selectedCategory, selectedVenue])

  const openWhatsAppForItem = (item: CatalogImageItem) => {
    const text = `Merhaba Farah Organizasyon! Kataloğunuzda yer alan "${item.title}" (${item.categoryName} - ${item.location}) konseptiniz hakkında detaylı teklif ve tarih müsaitliği almak istiyorum.`
    window.open(`https://wa.me/905300000000?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="katalog" className="px-5 py-20 sm:px-8 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Filter className="size-3.5" />
            <span>Filtrelenebilir Konsept & Ekipman Kataloğu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Tasarım Kataloğumuzu Keşfedin
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Düğün, kına, nişan masaları, açılış, bride party ve doğum günü konseptlerimizi kategoriye ve mekana göre süzün; nelerin dahil olduğunu şeffafça inceleyin.
          </p>
        </Reveal>

        {/* Filter Controls Bar */}
        <Reveal delay={100} className="mt-12 bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* 1. Category Filter */}
          <div>
            <span className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
              1. Hizmet Kategorisi Seçin
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_OPTIONS.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 font-medium',
                    selectedCategory === cat.slug
                      ? 'bg-olive text-olive-foreground font-semibold shadow-sm ring-2 ring-olive/40'
                      : 'bg-background border border-border/70 text-muted-foreground hover:border-olive/50 hover:text-foreground'
                  )}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Venue Filter */}
          <div className="pt-5 border-t border-border/60">
            <span className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
              2. Mekan Türüne Göre Filtreleyin
            </span>
            <div className="flex flex-wrap gap-2">
              {VENUE_OPTIONS.map((ven) => (
                <button
                  key={ven.slug}
                  type="button"
                  onClick={() => setSelectedVenue(ven.slug)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 font-medium',
                    selectedVenue === ven.slug
                      ? 'bg-foreground text-background font-semibold shadow-sm'
                      : 'bg-background border border-border/70 text-muted-foreground hover:text-foreground'
                  )}
                >
                  {ven.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filter Count & Reset */}
          <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/40">
            <span>
              Toplam <strong className="text-foreground">{filteredItems.length}</strong> konsept tasarımı listeleniyor
            </span>
            {(selectedCategory !== 'all' || selectedVenue !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedVenue('all')
                }}
                className="text-olive hover:underline font-semibold text-xs"
              >
                Filtreleri Sıfırla
              </button>
            )}
          </div>
        </Reveal>

        {/* Gallery Image Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 40} className="group">
              <div
                onClick={() => setActiveItem(item)}
                className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full hover:border-olive/50"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 text-foreground px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-sm inline-flex items-center gap-1.5 shadow-lg">
                      <Eye className="size-3.5" />
                      <span>Detayları İncele</span>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-champagne text-[0.62rem] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                    {item.categoryName}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-base font-medium text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1 text-[0.7rem] text-muted-foreground mt-1">
                    <MapPin className="size-3 text-olive" />
                    <span>{item.location}</span>
                  </div>

                  {/* Included tags preview */}
                  <div className="mt-4 pt-3 border-t border-border/60">
                    <span className="text-[0.62rem] uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                      Örnek Dahil Ekipmanlar:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {item.includedItems.slice(0, 3).map((inc, i) => (
                        <span
                          key={i}
                          className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[0.62rem] px-2 py-0.5 rounded-full font-medium"
                        >
                          ✓ {inc}
                        </span>
                      ))}
                      {item.includedItems.length > 3 && (
                        <span className="text-[0.62rem] text-muted-foreground self-center px-1">
                          +{item.includedItems.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="py-16 text-center text-muted-foreground bg-card border border-border/70 rounded-3xl mt-8">
            <p>Seçilen filtrelere uygun konsept bulunamadı.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all')
                setSelectedVenue('all')
              }}
              className="mt-3 text-olive underline text-xs font-semibold"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
      </div>

      {/* Modal / Lightbox for Item Details */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="overflow-y-auto">
              <div className="relative aspect-16/9 w-full bg-muted">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/80 pb-5">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-olive font-semibold">
                      {activeItem.categoryName} · {activeItem.location}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-medium mt-1">
                      {activeItem.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {/* Included Items Checklist */}
                  <div className="bg-background/80 border border-border/80 rounded-2xl p-5">
                    <h4 className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-3 flex items-center gap-1.5">
                      <Check className="size-4 stroke-[3]" />
                      <span>Pakete Dahil Malzemeler</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-foreground/90">
                      {activeItem.includedItems.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Extras */}
                  <div className="bg-background/80 border border-border/80 rounded-2xl p-5">
                    <h4 className="text-xs uppercase tracking-widest text-amber-600 font-bold mb-3 flex items-center gap-1.5">
                      <Plus className="size-4 stroke-[3]" />
                      <span>Opsiyonel Eklenebilirler</span>
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
                      {activeItem.optionalItems.map((opt, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <div className="mt-8 pt-5 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-muted-foreground">
                    * Nevşehir, Kapadokya ve çevre illerde yerinde kurulum yapılmaktadır.
                  </span>
                  <button
                    type="button"
                    onClick={() => openWhatsAppForItem(activeItem)}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3.5 px-8 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2.5 transition-colors shadow-md"
                  >
                    <MessageCircle className="size-4 fill-current" />
                    <span>Bu Konsept İçin WhatsApp'tan Teklif Al</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
