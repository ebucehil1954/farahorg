'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Filter, Eye, Check, Plus, MessageCircle, X, Sparkles, MapPin } from 'lucide-react'
import { ALL_GALLERY_IMAGES, CatalogImageItem } from '@/lib/services-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const CATEGORY_OPTIONS = [
  { slug: 'all', title: 'Tüm Konseptler' },
  { slug: 'nisan', title: 'Söz & Nişan' },
  { slug: 'kina', title: 'Kına Gecesi' },
  { slug: 'dugun', title: 'Düğün' },
  { slug: 'kapadokya', title: 'Kapadokya Özel' },
]

const COLOR_OPTIONS = [
  { slug: 'all', title: 'Tüm Renkler' },
  { slug: 'altin', title: 'Altın & Gold' },
  { slug: 'gumus', title: 'Gümüş' },
  { slug: 'ahsap', title: 'Ahşap & Doğal' },
  { slug: 'pembe', title: 'Pembe & Pudra' },
  { slug: 'krem', title: 'Krem & Boho' },
]

const VENUE_OPTIONS = [
  { slug: 'all', title: 'Tüm Mekanlar' },
  { slug: 'ev', title: 'Ev İçi' },
  { slug: 'bahce', title: 'Bahçe / Kır' },
  { slug: 'salon', title: 'Balo Salonu' },
  { slug: 'vadi', title: 'Vadi (Kapadokya)' },
  { slug: 'teras', title: 'Cave Teras' },
]

export function FilterableCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedColor, setSelectedColor] = useState<string>('all')
  const [selectedVenue, setSelectedVenue] = useState<string>('all')
  const [activeItem, setActiveItem] = useState<CatalogImageItem | null>(null)

  const filteredItems = useMemo(() => {
    return ALL_GALLERY_IMAGES.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.categorySlug === selectedCategory
      const matchColor = selectedColor === 'all' || item.colorTheme === selectedColor
      const matchVenue = selectedVenue === 'all' || item.venueType === selectedVenue
      return matchCategory && matchColor && matchVenue
    })
  }, [selectedCategory, selectedColor, selectedVenue])

  const openWhatsAppForItem = (item: CatalogImageItem) => {
    const text = `Merhaba Farah Organizasyon! Kataloğunuzda yer alan "${item.title}" (${item.categoryName} - ${item.location}) konseptiniz hakkında detaylı teklif ve tarih müsaitliği almak istiyorum.`
    window.open(`https://wa.me/905300000000?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="katalog" className="px-5 py-24 sm:px-8 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Filter className="size-3.5" />
            <span>Filtrelenebilir Ürün & Konsept Kataloğu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Tasarım Kataloğumuzu Keşfedin
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Düğün, kına, nişan masaları ve Kapadokya vadi setups'larımızı renge, mekana ve kategoriye göre süzün; nelerin pakete dahil olduğunu şeffafça inceleyin.
          </p>
        </Reveal>

        {/* Filter Controls Bar */}
        <Reveal delay={100} className="mt-12 bg-card border border-border/80 rounded-3xl p-6 shadow-sm space-y-5">
          {/* 1. Category Filter */}
          <div>
            <span className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-2.5">
              Etkinlik Kategorisi
            </span>
            <div className="flex flex-wrap gap-2">
              {CATEGORY_OPTIONS.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={cn(
                    'rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200',
                    selectedCategory === cat.slug
                      ? 'bg-olive text-olive-foreground font-medium shadow-sm'
                      : 'bg-background border border-border/70 text-muted-foreground hover:border-olive/50 hover:text-foreground'
                  )}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 pt-4 border-t border-border/60">
            {/* 2. Color Theme Filter */}
            <div>
              <span className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-2.5">
                Renk Paleti
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COLOR_OPTIONS.map((col) => (
                  <button
                    key={col.slug}
                    onClick={() => setSelectedColor(col.slug)}
                    className={cn(
                      'rounded-full px-3.5 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all duration-200',
                      selectedColor === col.slug
                        ? 'bg-foreground text-background font-medium'
                        : 'bg-background border border-border/70 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {col.title}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Venue Type Filter */}
            <div>
              <span className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-2.5">
                Mekan Türü
              </span>
              <div className="flex flex-wrap gap-1.5">
                {VENUE_OPTIONS.map((ven) => (
                  <button
                    key={ven.slug}
                    onClick={() => setSelectedVenue(ven.slug)}
                    className={cn(
                      'rounded-full px-3.5 py-1.5 text-[0.7rem] uppercase tracking-wider transition-all duration-200',
                      selectedVenue === ven.slug
                        ? 'bg-foreground text-background font-medium'
                        : 'bg-background border border-border/70 text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {ven.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active filter count indicator */}
          <div className="flex items-center justify-between pt-3 border-t border-border/50 text-xs text-muted-foreground">
            <span>
              Toplam <strong className="text-foreground font-serif">{filteredItems.length}</strong> konsept sergileniyor
            </span>
            {(selectedCategory !== 'all' || selectedColor !== 'all' || selectedVenue !== 'all') && (
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedColor('all')
                  setSelectedVenue('all')
                }}
                className="text-olive hover:underline text-[0.7rem] uppercase tracking-wider"
              >
                Filtreleri Temizle ×
              </button>
            )}
          </div>
        </Reveal>

        {/* Catalog Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 40}>
              <article className="group bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div
                  onClick={() => setActiveItem(item)}
                  className="arch bg-muted relative aspect-4/3 overflow-hidden cursor-pointer m-3 mb-0"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                    <Eye className="size-5" />
                    <span className="text-xs uppercase tracking-widest font-medium">Paket İncele</span>
                  </div>
                  <span className="absolute top-3 right-3 bg-black/60 text-champagne text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.categoryName}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl text-foreground font-medium">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[0.7rem] text-olive uppercase tracking-widest font-medium mt-1 flex items-center gap-1">
                      <MapPin className="size-3" />
                      <span>{item.location}</span>
                    </p>

                    {/* Included items checklist snippet */}
                    <div className="mt-4 border-t border-border/50 pt-3 space-y-1.5 text-xs text-muted-foreground">
                      <span className="text-[0.62rem] uppercase tracking-widest text-muted-foreground/80 block font-semibold">
                        Pakete Dahil Olanlar:
                      </span>
                      {item.includedItems.slice(0, 3).map((inc, i) => (
                        <div key={i} className="flex items-center gap-2 text-foreground/80 text-[0.75rem]">
                          <Check className="size-3.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2">
                    <button
                      onClick={() => setActiveItem(item)}
                      className="w-1/2 border border-border text-foreground hover:border-olive hover:text-olive rounded-full py-2.5 text-[0.68rem] uppercase tracking-widest transition-colors text-center"
                    >
                      Detay İncele
                    </button>
                    <button
                      onClick={() => openWhatsAppForItem(item)}
                      className="w-1/2 bg-olive text-olive-foreground hover:bg-olive/90 rounded-full py-2.5 text-[0.68rem] uppercase tracking-widest transition-colors text-center inline-flex items-center justify-center gap-1.5"
                    >
                      <MessageCircle className="size-3.5" />
                      <span>Fiyat Al</span>
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Modal Item Detail View */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 size-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="size-5" />
              </button>

              <div className="arch relative aspect-16/10 w-full overflow-hidden rounded-2xl mb-6">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-xs uppercase tracking-widest text-olive font-medium">
                {activeItem.categoryName} · {activeItem.location}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl mt-1 text-foreground">
                {activeItem.title}
              </h3>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* Included list */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4">
                  <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Check className="size-4 text-emerald-600" />
                    <span>Pakete Dahil Olanlar</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/80">
                    {activeItem.includedItems.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-emerald-600" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional list */}
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
                  <h4 className="text-xs font-semibold text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Plus className="size-4 text-amber-600" />
                    <span>Opsiyonel Ekstralar</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-foreground/80">
                    {activeItem.optionalItems.map((opt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-amber-600" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  Bu konsept Nevşehir, Kayseri, Aksaray ve Niğde için mekana uygun özelleştirilebilir.
                </p>
                <button
                  onClick={() => {
                    openWhatsAppForItem(activeItem)
                    setActiveItem(null)
                  }}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3.5 px-8 text-xs uppercase tracking-widest font-medium inline-flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="size-4 fill-current" />
                  <span>WhatsApp ile Müsaitlik & Fiyat Al</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
