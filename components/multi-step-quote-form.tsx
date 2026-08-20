'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronRight, ChevronLeft, Send, MessageCircle, Calendar, MapPin, Sparkles, User, Phone, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const SERVICE_TYPES = [
  'Düğün Organizasyonu',
  'Kına Gecesi',
  'Söz & Nişan Organizasyonu',
  'Bride Party',
  'Doğum Günü',
  'Açılış Organizasyonu',
  'Masa Sandalye Kiralama',
  'Özel Gün & Davet',
]

const CITIES = [
  'Nevşehir (Merkez & İlçeler)',
  'Ürgüp & Göreme (Kapadokya)',
  'Kayseri',
  'Aksaray',
  'Niğde',
  'Kırşehir',
]

export function MultiStepQuoteForm() {
  const [step, setStep] = useState<number>(1)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [referenceCode, setReferenceCode] = useState<string>('')

  const [formData, setFormData] = useState({
    eventType: 'Düğün Organizasyonu',
    city: 'Nevşehir (Merkez & İlçeler)',
    date: '',
    guests: '100-200 Kişi',
    venue: 'Kır Bahçesi / Açık Hava',
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = 'FRH-' + Math.floor(100000 + Math.random() * 900000)
    setReferenceCode(code)
    setSubmitted(true)
  }

  const buildWhatsAppLink = () => {
    const text = `Merhaba Farah Organizasyon! Web sitenizdeki Hızlı Teklif Formu (${referenceCode}) üzerinden talebimi iletiyorum:

• Ad Soyad: ${formData.name}
• Telefon: ${formData.phone}
• Hizmet Türü: ${formData.eventType}
• Şehir/Bölge: ${formData.city}
• Tahmini Tarih: ${formData.date || 'Belirtilmedi'}
• Davetli Sayısı: ${formData.guests}
• Mekan Türü: ${formData.venue}
• Özel Notlar: ${formData.notes || 'Yok'}

Katalog ve detaylı teklifinizi bekliyorum.`

    return `https://wa.me/905300000000?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="hizli-teklif" className="px-5 py-24 sm:px-8 sm:py-32 bg-background relative">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="font-script text-olive text-3xl italic">3 Adımda Hızlı Teklif Alın</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl">
            Özel Teklif Formu
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            1 dakikada organizasyon bilgilerinizi seçin, size ve mekanınıza özel detaylı konsept teklifimizi anında iletelim.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12 bg-card border border-border/90 rounded-3xl p-6 sm:p-10 shadow-lg">
          {/* Progress Indicator */}
          {!submitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
                <span className={step >= 1 ? 'text-olive font-semibold' : ''}>1. Tür & Bölge</span>
                <span className={step >= 2 ? 'text-olive font-semibold' : ''}>2. Tarih & Detay</span>
                <span className={step >= 3 ? 'text-olive font-semibold' : ''}>3. İletişim</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-olive transition-all duration-500 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {submitted ? (
            <div className="py-12 text-center max-w-md mx-auto animate-in fade-in zoom-in-95 duration-500">
              <div className="size-16 bg-olive/15 rounded-full flex items-center justify-center mx-auto text-olive mb-6">
                <CheckCircle2 className="size-10" />
              </div>
              <h3 className="font-serif text-3xl text-foreground">Talebiniz Alındı!</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2 font-medium">
                Referans No: <span className="text-olive">{referenceCode}</span>
              </p>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                Teşekkür ederiz! Farah Organizasyon ekibimiz bilgilerinizi inceleyerek en kısa sürede sizinle iletişime geçecektir.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-4 px-6 text-xs uppercase tracking-widest font-medium inline-flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="size-4 fill-current" />
                  <span>Teklifi WhatsApp'tan Doğrudan Gönder</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setStep(1)
                  }}
                  className="text-xs text-muted-foreground underline hover:text-foreground block mx-auto py-2"
                >
                  Yeni Form Doldur
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-semibold">
                      Organizasyon Hizmeti Seçin
                    </label>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                      {SERVICE_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField('eventType', type)}
                          className={cn(
                            'p-3.5 rounded-2xl border text-center text-xs font-medium transition-all duration-200',
                            formData.eventType === type
                              ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive font-semibold'
                              : 'border-border/60 hover:border-olive/50 bg-background/50 text-muted-foreground'
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/60">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-semibold">
                      Etkinlik Bölgesi / Şehir
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {CITIES.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => updateField('city', c)}
                          className={cn(
                            'p-3 rounded-xl border text-xs text-center transition-all duration-200',
                            formData.city === c
                              ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive font-semibold'
                              : 'border-border/60 hover:border-olive/50 bg-background/50 text-muted-foreground'
                          )}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-medium inline-flex items-center gap-2 transition-colors duration-300"
                    >
                      <span>Devam Et</span>
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-semibold">
                        Tahmini Etkinlik Tarihi
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateField('date', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-semibold">
                        Tahmini Davetli Sayısı
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => updateField('guests', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive"
                      >
                        <option value="20-50 Kişi (Butik)">20-50 Kişi (Butik)</option>
                        <option value="50-100 Kişi">50-100 Kişi</option>
                        <option value="100-200 Kişi">100-200 Kişi</option>
                        <option value="200-350 Kişi">200-350 Kişi</option>
                        <option value="350-500+ Kişi">350-500+ Kişi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-semibold">
                      Mekan Türü
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Ev / Salon İçi', 'Bahçe / Kır Alanı', 'Düğün / Davet Salonu', 'Teras / Açık Hava'].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => updateField('venue', v)}
                          className={cn(
                            'p-3 rounded-xl border text-xs text-center transition-all duration-200',
                            formData.venue === v
                              ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive font-semibold'
                              : 'border-border/60 hover:border-olive/50 bg-background/50 text-muted-foreground'
                          )}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="border border-border hover:bg-muted text-muted-foreground rounded-full px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      <ChevronLeft className="size-4" />
                      <span>Geri</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-medium inline-flex items-center gap-2 transition-colors duration-300"
                    >
                      <span>Devam Et</span>
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: Ayşe Yılmaz"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                        E-Posta Adresiniz (Opsiyonel)
                      </label>
                      <input
                        type="email"
                        placeholder="ornek@mail.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-1.5 font-semibold">
                      İlave İstekleriniz & Konsept Notları
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Özel konsept talepleriniz, renk tercihiniz veya ekipman ihtiyaçlarınızı belirtebilirsiniz..."
                      value={formData.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-olive resize-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="border border-border hover:bg-muted text-muted-foreground rounded-full px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      <ChevronLeft className="size-4" />
                      <span>Geri</span>
                    </button>
                    <button
                      type="submit"
                      className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-10 py-4 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-2 transition-colors duration-300 shadow-md"
                    >
                      <span>Teklif Talebini Gönder</span>
                      <Send className="size-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
