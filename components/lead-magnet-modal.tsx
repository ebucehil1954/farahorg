'use client'

import { useState } from 'react'
import { Download, FileText, CheckCircle2, Sparkles, X, ArrowRight, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.phone) return
    setSubmitted(true)
  }

  return (
    <>
      {/* Lead Magnet Banner Section */}
      <section className="px-5 py-16 bg-terracotta text-terracotta-foreground relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-black/15 border border-terracotta-foreground/20 rounded-3xl p-8 sm:p-12">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-terracotta-foreground/30 bg-terracotta-foreground/10 px-4 py-1 text-xs uppercase tracking-widest text-terracotta-foreground/90 font-semibold mb-4">
                <FileText className="size-3.5" />
                <span>Ücretsiz Dijital Konsept Kataloğu</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight font-normal">
                Nevşehir & Kapadokya Organizasyon & Konsept Kataloğu
              </h2>
              <p className="mt-4 text-terracotta-foreground/80 text-sm sm:text-base leading-relaxed">
                Tüm hizmet paket içeriklerimizi, en trend masa süslemelerini, kına tahtlarını, arka fonları ve renk paletlerimizi içeren dijital kataloğumuzu inceleyin.
              </p>
            </div>

            <div className="shrink-0 text-center lg:text-right">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-9 py-4 text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-xl hover:scale-105"
              >
                <Download className="size-4" />
                <span>Kataloğu İnceleyin</span>
              </button>
              <p className="text-[0.65rem] text-terracotta-foreground/60 mt-2 flex items-center justify-center lg:justify-end gap-1">
                <ShieldCheck className="size-3" />
                <span>Anında dijital erişim</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Modal Popup */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-card border border-border rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => {
                setIsOpen(false)
                setSubmitted(false)
              }}
              className="absolute top-4 right-4 size-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-5" />
            </button>

            {submitted ? (
              <div className="py-6 text-center animate-in zoom-in-95 duration-300">
                <div className="size-16 bg-emerald-500/15 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">Kataloğunuz Hazır!</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Teşekkürler {formData.name}! Farah Organizasyon Konsept Kataloğu dijital cihazınıza indirilmeye hazır.
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="/galeri"
                    className="w-full bg-olive text-olive-foreground hover:bg-olive/90 rounded-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <ArrowRight className="size-4" />
                    <span>Online Kataloğa Git</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      setSubmitted(false)
                    }}
                    className="text-xs text-muted-foreground underline block mx-auto py-1"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="size-12 bg-olive/15 text-olive rounded-2xl flex items-center justify-center mb-4">
                  <FileText className="size-6" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">
                  Konsept Kataloğu
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  Lütfen kataloğu görüntülemek için iletişim bilgilerinizi giriniz.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-1.5">
                      Adınız Soyadınız *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Örn: Ayşe Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="lead-phone" className="text-[0.68rem] uppercase tracking-widest text-muted-foreground font-semibold block mb-1.5">
                      Telefon Numarası *
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-background border border-border/80 rounded-xl p-3 text-sm text-foreground outline-none focus:border-olive transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-olive text-olive-foreground hover:bg-olive/90 rounded-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-md mt-2"
                  >
                    <span>Kataloğu Görüntüle</span>
                    <ArrowRight className="size-4" />
                  </button>

                  <p className="text-[0.62rem] text-center text-muted-foreground">
                    Kişisel verileriniz KVKK kapsamında gizli tutulmaktadır.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
