'use client'

import { useState, useMemo } from 'react'
import { Calculator, Check, MessageSquare, Sparkles, MapPin, Users, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface AddonOption {
  id: string
  name: string
  price: number
  category: string
}

const ADDONS: AddonOption[] = [
  { id: 'drone', name: '4K Drone Havadan Çekim & Video Klip', price: 4500, category: 'Medya' },
  { id: 'bando', name: 'Gelin Alma Bandosu (5 Kişilik Ekip)', price: 6500, category: 'Müzik' },
  { id: 'nedime', name: 'Ekstra Nedime Ekibi (+2 Dansçı)', price: 3500, category: 'Performans' },
  { id: 'sis_volkan', name: 'Yapay Sis Bulutu & 4x Soğuk Volkan Şovu', price: 4000, category: 'Efekt' },
  { id: 'vip_transfer', name: 'Kapadokya VIP Araç Transferi (Gidiş-Dönüş)', price: 3000, category: 'Lojistik' },
  { id: 'somine', name: 'Yapay Şömine & Romantik Işık Kurulumu', price: 2500, category: 'Dekor' },
  { id: 'keman', name: 'Canlı Keman Performansı (45 Dk)', price: 3500, category: 'Müzik' },
]

const CITIES = [
  { id: 'nevsehir', name: 'Nevşehir (Merkez & İlçeler)' },
  { id: 'urgup', name: 'Ürgüp & Göreme (Kapadokya)' },
  { id: 'kayseri', name: 'Kayseri' },
  { id: 'aksaray', name: 'Aksaray' },
  { id: 'nigde', name: 'Niğde' },
  { id: 'kirsehir', name: 'Kırşehir' },
]

const EVENT_TYPES = [
  { id: 'nisan', title: 'Söz & Nişan', basePrice: 12500, desc: 'Ev, bahçe veya salon nişan tagı & masası' },
  { id: 'kina', title: 'Kına Gecesi', basePrice: 16500, desc: 'Lüks taht, kaftan, nedime dans ekibi & ikramlar' },
  { id: 'dugun', title: 'Düğün & Kır Düğünü', basePrice: 24000, desc: 'Sandalye giydirme, gelin yolu, nikah takı & efektler' },
  { id: 'kapadokya', title: 'Kapadokya Teklifi', basePrice: 9500, desc: 'Vadi pikniği, MARRY ME LED harf & balon manzarası' },
]

export function BudgetCalculator() {
  const [eventType, setEventType] = useState<string>('nisan')
  const [guestCount, setGuestCount] = useState<number>(50)
  const [city, setCity] = useState<string>('nevsehir')
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['drone'])

  const selectedEvent = useMemo(
    () => EVENT_TYPES.find((e) => e.id === eventType) || EVENT_TYPES[0],
    [eventType]
  )

  const selectedCityObj = useMemo(
    () => CITIES.find((c) => c.id === city) || CITIES[0],
    [city]
  )

  const calculation = useMemo(() => {
    let base = selectedEvent.basePrice
    // Scale slightly with guest count over 50
    if (guestCount > 50) {
      base += (guestCount - 50) * 45
    }
    // Addon sum
    const addonSum = selectedAddons.reduce((sum, addonId) => {
      const addon = ADDONS.find((a) => a.id === addonId)
      return sum + (addon ? addon.price : 0)
    }, 0)

    const totalMin = base + addonSum
    const totalMax = Math.round(totalMin * 1.2)

    return { totalMin, totalMax }
  }, [selectedEvent, guestCount, selectedAddons])

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const whatsappMessage = useMemo(() => {
    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ')

    const text = `Merhaba Farah Organizasyon! Web sitenizdeki Canlı Bütçe Hesaplayıcı üzerinden teklif almak istiyorum:
• Etkinlik Türü: ${selectedEvent.title}
• Davetli Sayısı: ${guestCount} Kişi
• Lokasyon: ${selectedCityObj.name}
• Seçilen Ekstralar: ${addonNames || 'Yok'}
• Tahmini Bütçe Aralığım: ₺${calculation.totalMin.toLocaleString('tr-TR')} - ₺${calculation.totalMax.toLocaleString('tr-TR')}

Müsaitlik durumu ve net fiyat teklifi için bilgi alabilir miyim?`

    return `https://wa.me/905300000000?text=${encodeURIComponent(text)}`
  }, [selectedEvent, guestCount, selectedCityObj, selectedAddons, calculation])

  return (
    <section id="hesaplayici" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Calculator className="size-3.5" />
            <span>Şeffaf Fiyatlandırma Simülatörü</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Canlı Bütçe & Paket Hesaplayıcı
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hayalinizdeki organizasyonun detaylarını seçin, anında tahmini bütçe aralığınızı hesaplayın ve WhatsApp ile tek tıkla onay alın.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Interactive Form Controls */}
          <Reveal className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-3">
                1. Etkinlik Türünü Seçin
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {EVENT_TYPES.map((et) => (
                  <button
                    key={et.id}
                    type="button"
                    onClick={() => setEventType(et.id)}
                    className={cn(
                      'flex flex-col items-center text-center p-3.5 rounded-2xl border transition-all duration-300',
                      eventType === et.id
                        ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive/50'
                        : 'border-border/60 hover:border-olive/40 bg-background/50'
                    )}
                  >
                    <span className="font-serif text-sm font-medium">{et.title}</span>
                    <span className="text-[0.65rem] text-muted-foreground mt-1 line-clamp-1">
                      ₺{et.basePrice.toLocaleString('tr-TR')}'den başlayan
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium flex items-center gap-1.5">
                  <Users className="size-3.5 text-olive" />
                  <span>2. Tahmini Davetli Sayısı</span>
                </label>
                <span className="font-serif text-lg text-olive font-semibold">
                  {guestCount} Kişi
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={400}
                step={10}
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-olive"
              />
              <div className="flex justify-between text-[0.68rem] text-muted-foreground mt-2">
                <span>10 Kişi (Butik)</span>
                <span>150 Kişi</span>
                <span>400+ Kişi (Görkemli)</span>
              </div>
            </div>

            {/* Step 3: Location */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium flex items-center gap-1.5 mb-3">
                <MapPin className="size-3.5 text-olive" />
                <span>3. Organizasyon Şehri / Bölgesi</span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {CITIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCity(c.id)}
                    className={cn(
                      'text-left px-3.5 py-2.5 rounded-xl border text-xs transition-all duration-200',
                      city === c.id
                        ? 'border-olive bg-olive text-olive-foreground font-medium shadow-sm'
                        : 'border-border/60 hover:border-olive/40 bg-background/50 text-foreground/80'
                    )}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Addons */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-3">
                4. Ekstra Hizmetler ve Şovlar (İsteğe Bağlı)
              </label>
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id)
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={cn(
                        'flex items-center justify-between p-3 rounded-xl border cursor-pointer text-xs transition-all duration-200',
                        isChecked
                          ? 'border-olive/70 bg-olive/5 text-foreground'
                          : 'border-border/60 hover:border-border text-muted-foreground'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'size-4 rounded border flex items-center justify-center transition-colors',
                            isChecked ? 'bg-olive border-olive text-olive-foreground' : 'border-border'
                          )}
                        >
                          {isChecked && <Check className="size-3" />}
                        </div>
                        <span className="font-medium text-foreground">{addon.name}</span>
                      </div>
                      <span className="font-serif text-olive font-medium shrink-0 ml-2">
                        +₺{addon.price.toLocaleString('tr-TR')}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Live Summary Card */}
          <Reveal delay={120} className="lg:col-span-5 sticky top-28">
            <div className="bg-card border border-border rounded-3xl p-7 shadow-xl backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Sparkles className="size-32 text-olive" />
              </div>

              <div className="text-[0.68rem] tracking-[0.25em] text-olive uppercase font-medium">
                Tahmini Bütçe Özeti
              </div>
              <h3 className="font-serif text-2xl mt-1 text-foreground">
                {selectedEvent.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {selectedCityObj.name} · {guestCount} Davetli
              </p>

              <div className="my-6 p-5 rounded-2xl bg-background border border-border/80 text-center">
                <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                  Tahmini Toplam Tutar Aralığı
                </span>
                <div className="font-serif text-3xl sm:text-4xl text-olive font-bold tracking-tight">
                  ₺{calculation.totalMin.toLocaleString('tr-TR')} – ₺{calculation.totalMax.toLocaleString('tr-TR')}
                </div>
                <p className="text-[0.68rem] text-muted-foreground mt-2 italic">
                  * Fiyatlara malzeme, nakliye ve kurulum hizmeti dahildir.
                </p>
              </div>

              {/* Selections breakdown list */}
              <div className="space-y-2 text-xs border-t border-border/60 pt-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Temel Paket Kapsamı:</span>
                  <span className="font-medium text-foreground">₺{selectedEvent.basePrice.toLocaleString('tr-TR')}</span>
                </div>
                {guestCount > 50 && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Kişi Sayısı Farkı (+{guestCount - 50}):</span>
                    <span className="font-medium text-foreground">₺{((guestCount - 50) * 45).toLocaleString('tr-TR')}</span>
                  </div>
                )}
                {selectedAddons.length > 0 && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Seçilen Ekstralar ({selectedAddons.length} Adet):</span>
                    <span className="font-medium text-olive">
                      +₺
                      {selectedAddons
                        .reduce((s, id) => s + (ADDONS.find((a) => a.id === id)?.price || 0), 0)
                        .toLocaleString('tr-TR')}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-4 px-6 text-xs uppercase tracking-widest font-medium inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="size-4 fill-current" />
                  <span>WhatsApp ile Fiyatı Onayla</span>
                  <ChevronRight className="size-4" />
                </a>
                <p className="text-[0.65rem] text-center text-muted-foreground">
                  Seçtiğiniz paket detayları WhatsApp üzerinden müşteri temsilcimize otomatik iletilir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
