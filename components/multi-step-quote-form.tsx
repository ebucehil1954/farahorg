'use client'

import { useState, useMemo } from 'react'
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Send,
  MessageCircle,
  Calendar,
  MapPin,
  Sparkles,
  Users,
  Building2,
  Phone,
  User,
  Check,
  Plus,
  ShieldCheck,
  Clock,
  Flame,
  Music,
  Camera,
  Layers,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

interface ServiceType {
  id: string
  title: string
  desc: string
  badge?: string
}

const SERVICE_TYPES: ServiceType[] = [
  { id: 'dugun', title: 'Düğün Organizasyonu', desc: 'Gelin masası, gelin yolu, masa süsleme, DJ & ses' },
  { id: 'kina', title: 'Kına Gecesi', desc: 'Kına tahtı, arka fon, gelin yolu, masa süsleme' },
  { id: 'nisan', title: 'Söz & Nişan', desc: 'Söz/nişan fonu, sandalyeler, tepsi ve aksesuarlar' },
  { id: 'bride-party', title: 'Bride Party', desc: 'Bride to Be fon, neon yazı, masa düzeni, parti seti' },
  { id: 'dogum-gunu', title: 'Doğum Günü', desc: 'Balon kemeri, pasta masası, yaş/isim dekoru' },
  { id: 'acilis', title: 'Açılış Organizasyonu', desc: 'Giriş balon süsleme, bistro masa, kurdele & makas' },
  { id: 'masa-sandalye-kiralama', title: 'Masa Sandalye Kiralama', desc: 'Yuvarlak masa, bistro, Napolyon sandalye & nakliye' },
  { id: 'ozel-gun-davet', title: 'Özel Gün & Davet', desc: 'Özel konsept tasarım, müzik, ikram & fotoğraf alanı' },
]

const CITIES = [
  { id: 'nevsehir', name: 'Nevşehir (Merkez & İlçeler)' },
  { id: 'urgup', name: 'Ürgüp & Göreme (Kapadokya)' },
  { id: 'avanos', name: 'Avanos & Uçhisar' },
  { id: 'aksaray', name: 'Aksaray' },
  { id: 'nigde', name: 'Niğde' },
  { id: 'kirsehir', name: 'Kırşehir' },
]

const VENUE_TYPES = [
  { id: 'kir', name: 'Kır Bahçesi / Açık Hava' },
  { id: 'salon', name: 'Düğün / Balo Salonu' },
  { id: 'ev', name: 'Ev İçi / Salon / Bahçe' },
  { id: 'teras', name: 'Otel / Teras / Mağara' },
]

interface AddonOption {
  id: string
  name: string
  category: string
  icon: string
}

const ADDONS: AddonOption[] = [
  { id: 'dj_ses', name: 'DJ & Profesyonel Ses Sistemi', category: 'Müzik & Sunum', icon: 'music' },
  { id: 'foto_video', name: 'Fotoğraf ve Video Prodüksiyonu', category: 'Medya & Prodüksiyon', icon: 'camera' },
  { id: 'sis_bulutu', name: 'Sis Bulutu İlk Dans Şovu & Volkan', category: 'Özel Efekt', icon: 'flame' },
  { id: 'karsilama_pano', name: 'İsimlikli Karşılama Panosu & Şövale', category: 'Giriş Seremonisi', icon: 'sparkles' },
  { id: 'masa_giydirme', name: 'Şamdan, Mumluk & Masa Üstü Çiçekleri', category: 'Masa Düzeni', icon: 'layers' },
  { id: 'balon_kemer', name: 'Konsept Balon Kemeri & Giriş Tagı', category: 'Dekorasyon', icon: 'sparkles' },
  { id: 'kina_aksesuar', name: 'Kına Tepsisi, Def, Tef & Testi Seti', category: 'Seremoni', icon: 'sparkles' },
  { id: 'ikram_masasi', name: 'Özel Pasta & İkram Masası Sunumu', category: 'Sunum & İkram', icon: 'layers' },
]

export function MultiStepQuoteForm() {
  const [step, setStep] = useState<number>(1)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [referenceCode, setReferenceCode] = useState<string>('')

  const [formData, setFormData] = useState({
    eventType: 'dugun',
    city: 'nevsehir',
    guests: 100,
    venue: 'kir',
    date: '',
    selectedAddons: ['dj_ses', 'foto_video'],
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const selectedEvent = useMemo(
    () => SERVICE_TYPES.find((s) => s.id === formData.eventType) || SERVICE_TYPES[0],
    [formData.eventType]
  )

  const selectedCity = useMemo(
    () => CITIES.find((c) => c.id === formData.city) || CITIES[0],
    [formData.city]
  )

  const selectedVenue = useMemo(
    () => VENUE_TYPES.find((v) => v.id === formData.venue) || VENUE_TYPES[0],
    [formData.venue]
  )

  const toggleAddon = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(id)
        ? prev.selectedAddons.filter((item) => item !== id)
        : [...prev.selectedAddons, id],
    }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    const code = 'FRH-' + Math.floor(100000 + Math.random() * 900000)
    setReferenceCode(code)
    setSubmitted(true)
  }

  const getAddonNames = () => {
    return formData.selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ')
  }

  const buildWhatsAppLink = () => {
    const addonList = getAddonNames()
    const text = `Merhaba Farah Organizasyon! Web sitenizdeki Kişiye Özel Teklif Sihirbazı (${referenceCode || 'Yeni Talep'}) üzerinden talebimi iletiyorum:

• Ad Soyad: ${formData.name}
• Telefon: ${formData.phone}
• Hizmet Türü: ${selectedEvent.title}
• Etkinlik Bölgesi: ${selectedCity.name}
• Mekan Türü: ${selectedVenue.name}
• Tahmini Davetli: ${formData.guests} Kişi
• Etkinlik Tarihi: ${formData.date || 'Görüşülecek'}
• Dahil Edilecek Ekstralar: ${addonList || 'Standart Paket'}
• Özel İstekler / Notlar: ${formData.notes || 'Yok'}

Tarih müsaitliği ve detaylı fiyat teklifinizi rica ediyorum.`

    return `https://wa.me/905300000000?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="hizli-teklif" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/35 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-olive/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-olive/30 bg-olive/10 px-4 py-1.5 text-xs text-olive uppercase tracking-widest font-medium mb-4">
            <Sparkles className="size-3.5" />
            <span>Kişiye Özel Konsept & Bütçe Planlama</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Özel Teklif Formu & Sihirbazı
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Hizmet türünüzü, davetli sayınızı, mekanınızı ve istediğiniz ekstra detayları belirleyin; Nevşehir & Kapadokya organizasyonunuz için size özel şeffaf teklif özetinizi anında oluşturun.
          </p>
        </Reveal>

        {/* Wizard Container */}
        <Reveal delay={100} className="mt-12 bg-card border border-border/90 rounded-3xl shadow-xl overflow-hidden">
          {/* Step Progress Bar */}
          {!submitted && (
            <div className="border-b border-border/70 bg-muted/30 px-6 py-4 sm:px-10">
              <div className="flex items-center justify-between text-[0.68rem] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={cn(
                    'transition-colors flex items-center gap-1.5',
                    step >= 1 ? 'text-olive font-bold' : '',
                  )}
                >
                  <span className={cn('size-5 rounded-full flex items-center justify-center text-[0.62rem]', step >= 1 ? 'bg-olive text-olive-foreground font-bold' : 'bg-muted-foreground/30 text-background')}>1</span>
                  <span className="hidden sm:inline">Hizmet & Bölge</span>
                </button>
                <div className={cn('h-0.5 flex-1 mx-2 transition-colors', step >= 2 ? 'bg-olive' : 'bg-border')} />

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={cn(
                    'transition-colors flex items-center gap-1.5',
                    step >= 2 ? 'text-olive font-bold' : '',
                  )}
                >
                  <span className={cn('size-5 rounded-full flex items-center justify-center text-[0.62rem]', step >= 2 ? 'bg-olive text-olive-foreground font-bold' : 'bg-muted-foreground/30 text-background')}>2</span>
                  <span className="hidden sm:inline">Kapasite & Tarih</span>
                </button>
                <div className={cn('h-0.5 flex-1 mx-2 transition-colors', step >= 3 ? 'bg-olive' : 'bg-border')} />

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={cn(
                    'transition-colors flex items-center gap-1.5',
                    step >= 3 ? 'text-olive font-bold' : '',
                  )}
                >
                  <span className={cn('size-5 rounded-full flex items-center justify-center text-[0.62rem]', step >= 3 ? 'bg-olive text-olive-foreground font-bold' : 'bg-muted-foreground/30 text-background')}>3</span>
                  <span className="hidden sm:inline">Ekstra Hizmetler</span>
                </button>
                <div className={cn('h-0.5 flex-1 mx-2 transition-colors', step >= 4 ? 'bg-olive' : 'bg-border')} />

                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className={cn(
                    'transition-colors flex items-center gap-1.5',
                    step >= 4 ? 'text-olive font-bold' : '',
                  )}
                >
                  <span className={cn('size-5 rounded-full flex items-center justify-center text-[0.62rem]', step >= 4 ? 'bg-olive text-olive-foreground font-bold' : 'bg-muted-foreground/30 text-background')}>4</span>
                  <span className="hidden sm:inline">İletişim & Teklif</span>
                </button>
              </div>
            </div>
          )}

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              /* Success / Result Screen */
              <div className="py-8 text-center max-w-lg mx-auto animate-in fade-in zoom-in-95 duration-400">
                <div className="size-20 bg-olive/15 text-olive rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="size-12" />
                </div>
                <span className="text-xs uppercase tracking-widest text-olive font-bold">
                  Referans Kodu: {referenceCode}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-foreground mt-2">
                  Teklif Talebiniz Hazır!
                </h3>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  Sayın <strong>{formData.name}</strong>, <strong>{selectedEvent.title}</strong> ({selectedCity.name}) için seçtiğiniz tüm detaylar sistemimize kaydedildi.
                </p>

                {/* Summary Card Preview */}
                <div className="mt-6 bg-background/80 border border-border/80 rounded-2xl p-5 text-left text-xs space-y-2">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Organizasyon:</span>
                    <span className="font-semibold text-foreground">{selectedEvent.title}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Bölge & Mekan:</span>
                    <span className="font-semibold text-foreground">{selectedCity.name} · {selectedVenue.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Kapasite / Tarih:</span>
                    <span className="font-semibold text-foreground">{formData.guests} Kişi · {formData.date || 'Tarih Belirlenecek'}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-muted-foreground">Ekstra Hizmetler:</span>
                    <span className="font-semibold text-foreground text-right max-w-[60%]">{getAddonNames() || 'Standart Konsept'}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 space-y-3">
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-4 px-6 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg hover:scale-[1.02]"
                  >
                    <MessageCircle className="size-5 fill-current" />
                    <span>WhatsApp'tan Teklifi Anında İlet</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setStep(1)
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground underline block mx-auto py-2"
                  >
                    Yeni Teklif Oluştur
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1: SERVICE TYPE & REGION */}
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
                        1. Hangi Hizmetimiz İçin Teklif Almak İstiyorsunuz?
                      </label>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {SERVICE_TYPES.map((s) => {
                          const isSelected = formData.eventType === s.id
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, eventType: s.id }))}
                              className={cn(
                                'p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-full',
                                isSelected
                                  ? 'border-olive bg-olive/10 ring-2 ring-olive/50 shadow-sm'
                                  : 'border-border/70 hover:border-olive/50 bg-background/60 hover:bg-background'
                              )}
                            >
                              <div>
                                <div className="flex items-center justify-between">
                                  <span className="font-serif text-sm font-semibold text-foreground">
                                    {s.title}
                                  </span>
                                  {isSelected && (
                                    <div className="size-5 rounded-full bg-olive text-olive-foreground flex items-center justify-center shrink-0">
                                      <Check className="size-3 stroke-[3]" />
                                    </div>
                                  )}
                                </div>
                                <p className="text-[0.7rem] text-muted-foreground mt-1.5 leading-snug line-clamp-2">
                                  {s.desc}
                                </p>
                              </div>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/70">
                      <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-3">
                        2. Etkinliğin Gerçekleşeceği Şehir / Bölge
                      </label>
                      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                        {CITIES.map((c) => {
                          const isSelected = formData.city === c.id
                          return (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, city: c.id }))}
                              className={cn(
                                'p-3.5 rounded-xl border text-xs text-center transition-all duration-200 font-medium',
                                isSelected
                                  ? 'border-olive bg-olive/15 text-foreground ring-1 ring-olive font-semibold'
                                  : 'border-border/70 hover:border-olive/40 bg-background/50 text-muted-foreground'
                              )}
                            >
                              {c.name}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                      >
                        <span>2. Adıma Geç (Kapasite & Tarih)</span>
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: CAPACITY, VENUE & DATE */}
                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    {/* Guest Count Interactive Slider */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Users className="size-4 text-olive" />
                          <span>Tahmini Davetli Sayısı</span>
                        </label>
                        <span className="text-sm font-serif font-bold text-olive bg-olive/15 px-3.5 py-1 rounded-full">
                          {formData.guests} Kişi
                        </span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="500"
                        step="10"
                        value={formData.guests}
                        onChange={(e) => setFormData((prev) => ({ ...prev, guests: Number(e.target.value) }))}
                        className="w-full accent-olive h-2.5 bg-muted rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[0.68rem] text-muted-foreground mt-1.5">
                        <span>20 Kişi (Butik Davet)</span>
                        <span>150 Kişi</span>
                        <span>300 Kişi</span>
                        <span>500+ Kişi (Geniş Katılım)</span>
                      </div>
                      {/* Preset Chips */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {[30, 50, 100, 200, 350, 500].map((count) => (
                          <button
                            key={count}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, guests: count }))}
                            className={cn(
                              'px-3 py-1 rounded-full text-xs transition-colors',
                              formData.guests === count
                                ? 'bg-olive text-olive-foreground font-semibold'
                                : 'bg-muted/70 text-muted-foreground hover:text-foreground'
                            )}
                          >
                            {count} Kişi
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Venue Type & Date in 2 columns */}
                    <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t border-border/70">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-2.5">
                          Mekan Türü
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {VENUE_TYPES.map((v) => (
                            <button
                              key={v.id}
                              type="button"
                              onClick={() => setFormData((prev) => ({ ...prev, venue: v.id }))}
                              className={cn(
                                'p-3 rounded-xl border text-xs text-center transition-all duration-200',
                                formData.venue === v.id
                                  ? 'border-olive bg-olive/15 text-foreground ring-1 ring-olive font-semibold'
                                  : 'border-border/70 hover:border-olive/40 bg-background/50 text-muted-foreground'
                              )}
                            >
                              {v.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold block mb-2.5">
                          Tahmini Etkinlik Tarihi
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive transition-colors"
                        />
                        <p className="text-[0.68rem] text-muted-foreground mt-1.5">
                          * Tarih henüz net değilse boş bırakabilirsiniz.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-border/80 hover:bg-muted text-muted-foreground rounded-full px-6 py-3 text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5"
                      >
                        <ChevronLeft className="size-4" />
                        <span>Geri</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                      >
                        <span>3. Adıma Geç (Ekstra Hizmetler)</span>
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: ADD-ON SERVICES */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold flex items-center gap-1.5">
                          <Sparkles className="size-4 text-olive" />
                          <span>Paketinize Dahil Edilmesini İstediğiniz Ekstraları Seçin</span>
                        </label>
                        <span className="text-xs text-olive font-medium">
                          {formData.selectedAddons.length} Hizmet Seçildi
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        Aşağıdaki opsiyonel ekstralara tıklayarak teklif paketinize ekleyebilir veya çıkarabilirsiniz.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ADDONS.map((addon) => {
                          const isSelected = formData.selectedAddons.includes(addon.id)
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => toggleAddon(addon.id)}
                              className={cn(
                                'p-3.5 rounded-2xl border text-left flex items-center justify-between text-xs transition-all duration-200',
                                isSelected
                                  ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive'
                                  : 'border-border/70 hover:border-olive/40 bg-background/50 text-muted-foreground'
                              )}
                            >
                              <div className="flex items-center gap-2.5">
                                <div
                                  className={cn(
                                    'size-5 rounded-md flex items-center justify-center border transition-colors',
                                    isSelected
                                      ? 'bg-olive border-olive text-olive-foreground'
                                      : 'border-muted-foreground/40 bg-background'
                                  )}
                                >
                                  {isSelected && <Check className="size-3.5 stroke-[3]" />}
                                </div>
                                <span className="font-medium text-foreground/90">{addon.name}</span>
                              </div>
                              <span className="text-[0.62rem] text-muted-foreground uppercase tracking-wider bg-muted/80 px-2 py-0.5 rounded-full">
                                {addon.category}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-border/80 hover:bg-muted text-muted-foreground rounded-full px-6 py-3 text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5"
                      >
                        <ChevronLeft className="size-4" />
                        <span>Geri</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-md"
                      >
                        <span>Son Adıma Geç (İletişim & Teklif)</span>
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: CONTACT & SUMMARY */}
                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Live Summary Strip */}
                    <div className="bg-olive/10 border border-olive/20 rounded-2xl p-4 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-olive/15 pb-2.5">
                        <span className="font-serif text-sm font-semibold text-foreground">
                          {selectedEvent.title}
                        </span>
                        <span className="text-olive font-medium">
                          {selectedCity.name} · {formData.guests} Kişi · {selectedVenue.name}
                        </span>
                      </div>
                      <div className="pt-2 text-muted-foreground text-[0.72rem] flex items-center justify-between">
                        <span>Seçilen Ekstralar: <strong>{getAddonNames() || 'Temel Paket'}</strong></span>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-olive hover:underline font-semibold"
                        >
                          Düzenle ✎
                        </button>
                      </div>
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label htmlFor="quote-name" className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                          Adınız Soyadınız *
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          required
                          placeholder="Örn: Ayşe Yılmaz"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="quote-phone" className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                          Telefon Numaranız *
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          required
                          placeholder="05XX XXX XX XX"
                          value={formData.phone}
                          onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                          className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="quote-notes" className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                        Özel İstekleriniz & Konsept Notları
                      </label>
                      <textarea
                        id="quote-notes"
                        rows={3}
                        placeholder="Renk tercihleriniz, mekan özellikleri veya özel detayları belirtebilirsiniz..."
                        value={formData.notes}
                        onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="border border-border/80 hover:bg-muted text-muted-foreground rounded-full px-6 py-3 text-xs uppercase tracking-widest transition-colors inline-flex items-center gap-1.5 w-full sm:w-auto justify-center"
                      >
                        <ChevronLeft className="size-4" />
                        <span>Geri</span>
                      </button>

                      <button
                        type="submit"
                        className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-10 py-4 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl hover:scale-[1.02] w-full sm:w-auto"
                      >
                        <span>Teklif Özetini Oluştur & Gönder</span>
                        <Send className="size-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
