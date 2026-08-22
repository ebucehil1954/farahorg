'use client'

import { useState, useMemo } from 'react'
import { Check, MessageSquare, Sparkles, MapPin, Users, ChevronRight, Layers, Sliders, Calendar } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface AddonOption {
  id: string
  name: string
  category: string
}

const ADDONS: AddonOption[] = [
  { id: 'dj_ses', name: 'DJ & Profesyonel Ses Sistemi', category: 'Müzik' },
  { id: 'foto_video', name: 'Fotoğraf ve Video Çekimi', category: 'Medya' },
  { id: 'sis_bulutu', name: 'Sis Bulutu Gösterisi', category: 'Efekt' },
  { id: 'karsilama_pano', name: 'İsimli Karşılama Panosu & Şövale', category: 'Dekor' },
  { id: 'masa_giydirme', name: 'Masa & Sandalye Giydirme / Süsleme', category: 'Düzen' },
  { id: 'balon_kemer', name: 'Konsept Balon Kemeri / Giriş Süslemesi', category: 'Dekor' },
  { id: 'kina_aksesuar', name: 'Kına Tepsisi, Def & Damat Örtüsü Seti', category: 'Seremoni' },
  { id: 'ikram_masasi', name: 'Özel Pasta & İkram Sunum Masası', category: 'İkram' },
]

const CITIES = [
  { id: 'nevsehir', name: 'Nevşehir (Merkez & İlçeler)' },
  { id: 'urgup', name: 'Ürgüp & Göreme (Kapadokya)' },
  { id: 'avanos', name: 'Avanos & Uçhisar' },
  { id: 'aksaray', name: 'Aksaray' },
  { id: 'nigde', name: 'Niğde' },
  { id: 'kirsehir', name: 'Kırşehir' },
]

const EVENT_TYPES = [
  { id: 'dugun', title: 'Düğün Organizasyonu', desc: 'Gelin masası, gelin yolu, masa süsleme, DJ & ses' },
  { id: 'kina', title: 'Kına Gecesi', desc: 'Kına tahtı, arka fon, gelin yolu, masa süsleme' },
  { id: 'nisan', title: 'Söz & Nişan', desc: 'Söz/nişan fonu, sandalyeler, tepsi ve aksesuarlar' },
  { id: 'bride-party', title: 'Bride Party', desc: 'Bride to Be fon, neon yazı, masa düzeni, parti seti' },
  { id: 'dogum-gunu', title: 'Doğum Günü', desc: 'Balon kemeri, pasta masası, yaş/isim dekoru' },
  { id: 'acilis', title: 'Açılış Organizasyonu', desc: 'Giriş balon süsleme, bistro masa, kurdele & makas' },
  { id: 'masa-sandalye-kiralama', title: 'Masa Sandalye Kiralama', desc: 'Yuvarlak masa, bistro, Napolyon sandalye & nakliye' },
  { id: 'ozel-gun-davet', title: 'Özel Gün & Davet', desc: 'Özel konsept tasarım, müzik, ikram & fotoğraf alanı' },
]

export function BudgetCalculator() {
  const [eventType, setEventType] = useState<string>('dugun')
  const [guestCount, setGuestCount] = useState<number>(100)
  const [city, setCity] = useState<string>('nevsehir')
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['dj_ses', 'foto_video'])

  const selectedEvent = useMemo(
    () => EVENT_TYPES.find((e) => e.id === eventType) || EVENT_TYPES[0],
    [eventType]
  )

  const selectedCityObj = useMemo(
    () => CITIES.find((c) => c.id === city) || CITIES[0],
    [city]
  )

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

    const text = `Merhaba Farah Organizasyon! Web sitenizdeki Paket Planlayıcı üzerinden özel konsept talebi oluşturmak istiyorum:
• Organizasyon Türü: ${selectedEvent.title}
• Tahmini Davetli Sayısı: ${guestCount} Kişi
• Lokasyon: ${selectedCityObj.name}
• Tercih Edilen Hizmet & Ekstralar: ${addonNames || 'Standart Paket'}

Tarih müsaitliği ve kişiye özel detaylı teklif alabilir miyim?`

    return `https://wa.me/905300000000?text=${encodeURIComponent(text)}`
  }, [selectedEvent, guestCount, selectedCityObj, selectedAddons])

  return (
    <section id="hesaplayici" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Sliders className="size-3.5" />
            <span>İnteraktif Paket Sihirbazı</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Etkinlik & Paket Planlayıcı
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hayalinizdeki organizasyonun türünü, davetli sayısını ve talep ettiğiniz özellikleri seçin; size özel teklif özetinizi anında WhatsApp ile bize iletin.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Interactive Controls */}
          <Reveal className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            {/* Step 1: Event Type */}
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
                1. Organizasyon Türünüzü Seçin
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EVENT_TYPES.map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setEventType(e.id)}
                    className={cn(
                      'p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between',
                      eventType === e.id
                        ? 'border-olive bg-olive/10 ring-1 ring-olive'
                        : 'border-border/60 hover:border-olive/50 bg-background/50'
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-sm font-semibold text-foreground">
                          {e.title}
                        </span>
                        {eventType === e.id && (
                          <Check className="size-4 text-olive shrink-0" />
                        )}
                      </div>
                      <p className="text-[0.72rem] text-muted-foreground mt-1 line-clamp-1">
                        {e.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5">
                  <Users className="size-3.5 text-olive" />
                  <span>2. Tahmini Davetli Sayısı</span>
                </label>
                <span className="text-sm font-serif font-bold text-olive bg-olive/15 px-3 py-0.5 rounded-full">
                  {guestCount} Kişi
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="10"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-olive h-2 bg-muted rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[0.68rem] text-muted-foreground mt-1">
                <span>20 Kişi (Butik)</span>
                <span>250 Kişi</span>
                <span>500+ Kişi (Geniş Davet)</span>
              </div>
            </div>

            {/* Step 3: Location */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5 mb-3">
                <MapPin className="size-3.5 text-olive" />
                <span>3. Etkinlik Bölgesi / Şehir</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CITIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCity(c.id)}
                    className={cn(
                      'p-3 rounded-xl border text-xs text-center transition-all duration-200 font-medium',
                      city === c.id
                        ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive font-semibold'
                        : 'border-border/60 hover:border-olive/50 bg-background/50 text-muted-foreground'
                    )}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Services */}
            <div className="mt-8 pt-6 border-t border-border/60">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5 mb-3">
                <Sparkles className="size-3.5 text-olive" />
                <span>4. Dahil Edilecek Ekstra Hizmetler</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id)
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={cn(
                        'p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all duration-200',
                        isSelected
                          ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive'
                          : 'border-border/60 hover:border-olive/40 bg-background/50 text-muted-foreground'
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            'size-4 rounded flex items-center justify-center border transition-colors',
                            isSelected
                              ? 'bg-olive border-olive text-olive-foreground'
                              : 'border-muted-foreground/40'
                          )}
                        >
                          {isSelected && <Check className="size-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium text-foreground/90">{addon.name}</span>
                      </div>
                      <span className="text-[0.65rem] text-muted-foreground uppercase tracking-wider bg-muted/60 px-2 py-0.5 rounded">
                        {addon.category}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Sticky Summary Card */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-24" delay={120}>
            <div className="bg-card border-2 border-olive/30 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 size-32 bg-olive/10 rounded-full blur-2xl pointer-events-none" />

              <span className="font-script text-olive text-2xl italic">Özel Paket Özeti</span>
              <h3 className="font-serif text-2xl text-foreground font-medium mt-1">
                {selectedEvent.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {selectedCityObj.name} · {guestCount} Kişilik Kapasite
              </p>

              {/* Selected Options List */}
              <div className="mt-6 space-y-3 py-4 border-y border-border/70 text-xs">
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Organizasyon Konsepti:</span>
                  <span className="font-semibold text-foreground">{selectedEvent.title}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Bölge / Şehir:</span>
                  <span className="font-semibold text-foreground">{selectedCityObj.name}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Davetli Kapasitesi:</span>
                  <span className="font-semibold text-foreground">{guestCount} Kişi</span>
                </div>
                <div className="flex justify-between items-start text-muted-foreground pt-2 border-t border-border/40">
                  <span>Seçilen Hizmetler:</span>
                  <span className="font-semibold text-foreground text-right max-w-[55%]">
                    {selectedAddons.length > 0 ? (
                      selectedAddons
                        .map((id) => ADDONS.find((a) => a.id === id)?.name)
                        .filter(Boolean)
                        .join(', ')
                    ) : (
                      'Temel Paket'
                    )}
                  </span>
                </div>
              </div>

              {/* Action Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-olive/10 border border-olive/20 text-center">
                <p className="text-xs text-foreground font-medium">
                  ✨ Size Özel Konsept & Şeffaf Paket Teklifi
                </p>
                <p className="text-[0.72rem] text-muted-foreground mt-1">
                  Mekanınıza ve tarih seçiminize göre en uygun planlama hazırlanır.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-4 px-6 text-xs uppercase tracking-widest font-medium inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md"
                >
                  <MessageSquare className="size-4" />
                  <span>WhatsApp ile Teklif Al</span>
                </a>
                <a
                  href="#hizli-teklif"
                  className="w-full bg-olive text-olive-foreground hover:bg-olive/90 rounded-full py-3.5 px-6 text-xs uppercase tracking-widest font-medium inline-flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <span>Teklif Formuna Aktar</span>
                  <ChevronRight className="size-4" />
                </a>
              </div>

              <p className="text-[0.68rem] text-center text-muted-foreground mt-4 leading-normal">
                * Nevşehir ve çevre illere nakliye ve yerinde kurulum ekibimiz tarafından sağlanır.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
