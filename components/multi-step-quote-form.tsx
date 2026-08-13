'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronRight, ChevronLeft, Send, MessageCircle, Calendar, MapPin, Sparkles, User, Phone, Mail } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function MultiStepQuoteForm() {
  const [step, setStep] = useState<number>(1)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [referenceCode, setReferenceCode] = useState<string>('')

  const [formData, setFormData] = useState({
    eventType: 'Söz & Nişan',
    city: 'Nevşehir',
    date: '',
    guests: '50-100 Kişi',
    venue: 'Ev / Bahçe',
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
• Etkinlik Türü: ${formData.eventType}
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
          <span className="font-script text-olive text-3xl italic">3 Adımda Hızlı Fiyat Alın</span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl md:text-5xl">
            Özel Teklif Formu
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Uzun formlarla vakit kaybetmeyin. 1 dakikada organizasyon bilgilerinizi seçin, size özel detaylı teklifimizi anında iletelim.
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
                Teşekkür ederiz! Organizasyon ekibimiz bilgilerinizi inceleyerek en geç 2 saat içerisinde size dönüş yapacaktır.
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
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-medium">
                      Organizasyon Türü
                    </label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {['Söz & Nişan', 'Kına Gecesi', 'Düğün & Kır Düğünü', 'Kapadokya Teklifi'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateField('eventType', type)}
                          className={cn(
                            'p-4 rounded-2xl border text-center text-xs font-medium transition-all duration-200',
                            formData.eventType === type
                              ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive'
                              : 'border-border/60 hover:border-olive/50 bg-background/50 text-muted-foreground'
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-medium flex items-center gap-1">
                      <MapPin className="size-3.5 text-olive" />
                      <span>Hangi Şehir / İlçede Yapılacak?</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {['Nevşehir Merkez', 'Ürgüp & Göreme', 'Kayseri', 'Aksaray', 'Niğde', 'Kırşehir'].map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => updateField('city', c)}
                          className={cn(
                            'p-3 rounded-xl border text-xs text-left transition-all duration-200',
                            formData.city === c
                              ? 'border-olive bg-olive text-olive-foreground font-medium'
                              : 'border-border/60 hover:border-border bg-background/50 text-foreground/80'
                          )}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="form-date" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-olive" />
                        <span>Tahmini Etkinlik Tarihi</span>
                      </label>
                      <input
                        id="form-date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateField('date', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium">
                        Davetli Sayısı
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => updateField('guests', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                      >
                        <option value="10-30 Kişi (Butik Ev/Teras)">10-30 Kişi (Butik Ev/Teras)</option>
                        <option value="50-100 Kişi (Nişan/Kına)">50-100 Kişi (Nişan/Kına)</option>
                        <option value="100-250 Kişi (Orta Ölçek Salon/Bahçe)">100-250 Kişi (Orta Ölçek Salon/Bahçe)</option>
                        <option value="250-500+ Kişi (Görkemli Düğün)">250-500+ Kişi (Görkemli Düğün)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-medium">
                      Mekan Türü
                    </label>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {['Ev / Bahçe', 'Düğün Salonu', 'Kapadokya Vadisi', 'Cave Otel Terası'].map((v) => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => updateField('venue', v)}
                          className={cn(
                            'p-3 rounded-xl border text-xs text-center font-medium transition-all duration-200',
                            formData.venue === v
                              ? 'border-olive bg-olive/10 text-foreground ring-1 ring-olive'
                              : 'border-border/60 hover:border-border bg-background/50 text-muted-foreground'
                          )}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="form-name" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium flex items-center gap-1.5">
                        <User className="size-3.5 text-olive" />
                        <span>Adınız Soyadınız *</span>
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="Örn: Ayşe Yılmaz"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium flex items-center gap-1.5">
                        <Phone className="size-3.5 text-olive" />
                        <span>Telefon Numarası *</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-email" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium flex items-center gap-1.5">
                      <Mail className="size-3.5 text-olive" />
                      <span>E-posta Adresi (İsteğe Bağlı)</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="ornek@mail.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="form-notes" className="text-xs uppercase tracking-widest text-muted-foreground block mb-2 font-medium">
                      Özel İstekleriniz / Hayal Ettiğiniz Konsept
                    </label>
                    <textarea
                      id="form-notes"
                      rows={3}
                      placeholder="İstediğiniz renk paleti, ekletmek istediğiniz bando/drone vb. aksesuarlar..."
                      value={formData.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-xs uppercase tracking-widest hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="size-4" />
                    <span>Geri</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-widest transition-colors duration-300 ml-auto"
                  >
                    <span>Devam Et</span>
                    <ChevronRight className="size-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-olive text-olive-foreground hover:bg-olive/90 inline-flex items-center gap-2 px-9 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium transition-colors duration-300 shadow-md ml-auto"
                  >
                    <span>Teklifi Oluştur & Gönder</span>
                    <Send className="size-4" />
                  </button>
                )}
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
