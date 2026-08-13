import Image from 'next/image'
import { Calculator, Sparkles, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/raw/img-12.jpeg"
        alt="Kapadokya vadisinde peri bacaları ve mumlar eşliğinde hazırlanan büyüleyici davet sofrası"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark editorial overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[oklch(0.22_0.03_46.5)]/58"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.03_46.5)]/70 via-transparent to-[oklch(0.2_0.03_46.5)]/60"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-champagne/10 px-4 py-1.5 text-[0.65rem] sm:text-xs text-champagne uppercase tracking-[0.3em] font-medium backdrop-blur-sm mb-4">
          <Sparkles className="size-3.5" />
          <span>Nevşehir · Kapadokya · Kayseri · Aksaray</span>
        </div>

        <h1 className="text-champagne animate-in fade-in slide-in-from-bottom-5 font-serif text-[2.2rem] leading-[1.15] font-normal tracking-tight text-balance duration-1000 sm:text-5xl md:text-6xl">
          Hayallerinizi
          <span className="font-script mx-2.5 inline-block text-[1.05em] italic">
            Kapadokya Büyüsüyle
          </span>
          Buluşturuyoruz
        </h1>

        <p className="text-champagne/80 animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-pretty duration-1000 sm:text-base">
          Düğün, kına gecesi, söz & nişan davetleri ve vadide evlilik teklifleri; Nevşehir ve çevre illerde her detayı sizin hikâyeniz için incelikle tasarlıyoruz.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col items-center justify-center gap-4 duration-1000 sm:flex-row">
          <a
            href="#hesaplayici"
            className="bg-olive text-olive-foreground hover:bg-olive/90 border-olive w-full rounded-full border px-8 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase font-medium shadow-lg transition-all duration-300 sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <Calculator className="size-4" />
            <span>Canlı Bütçe Hesapla</span>
          </a>
          <a
            href="#hizli-teklif"
            className="border-champagne/60 text-champagne hover:bg-champagne hover:text-foreground w-full rounded-full border px-8 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase backdrop-blur-sm transition-all duration-500 sm:w-auto inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="size-4" />
            <span>3 Adımda Fiyat Al</span>
          </a>
        </div>

        {/* Feature Pill Tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-champagne/70 text-[0.68rem] tracking-widest uppercase">
          <span className="bg-black/30 border border-champagne/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            ✓ Şeffaf Paket Fiyatları
          </span>
          <span className="bg-black/30 border border-champagne/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            ✓ 3D Mekan Yerleşimi
          </span>
          <span className="bg-black/30 border border-champagne/20 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            ✓ Anında WhatsApp İletişimi
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <span className="via-champagne/60 block h-14 w-px bg-gradient-to-b from-transparent to-transparent" />
      </div>
    </section>
  )
}
