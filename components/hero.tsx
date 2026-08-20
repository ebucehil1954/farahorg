import Image from 'next/image'
import { Sparkles, ArrowRight, MessageCircle, Eye } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/raw/img-12.jpeg"
        alt="Kapadokya davet sofrası ve büyüleyici atmosfer"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Dark editorial overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[oklch(0.22_0.03_46.5)]/62"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[oklch(0.2_0.03_46.5)]/75 via-transparent to-[oklch(0.2_0.03_46.5)]/65"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-28 pb-16 text-center">
        {/* City button */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-champagne/50 bg-champagne/15 px-6 py-2.5 text-xs sm:text-sm text-champagne uppercase tracking-[0.35em] font-semibold backdrop-blur-md shadow-lg mb-6 animate-in fade-in duration-700">
          <Sparkles className="size-4 text-champagne shrink-0" />
          <span>Nevşehir Kapadokya</span>
        </div>

        {/* Main Title */}
        <h1 className="text-champagne animate-in fade-in slide-in-from-bottom-5 font-serif text-[2.35rem] leading-[1.14] font-normal tracking-tight text-balance duration-1000 sm:text-5xl md:text-6xl lg:text-[4rem]">
          Hayalinizdeki
          <span className="font-script mx-3 inline-block text-[1.12em] italic text-champagne/95">
            Günü, Size Özel
          </span>
          Tasarlıyoruz.
        </h1>

        {/* Subtitle */}
        <p className="text-champagne/85 animate-in fade-in slide-in-from-bottom-4 mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-pretty duration-1000 sm:text-base md:text-lg">
          Düğün, kına, nişan ve özel davetlerinizi; zarafet, estetik ve size özel dokunuşlarla unutulmaz anlara dönüştürüyoruz.
        </p>

        {/* Action Buttons */}
        <div className="animate-in fade-in slide-in-from-bottom-4 mt-10 flex flex-col items-center justify-center gap-4 duration-1000 sm:flex-row">
          <a
            href="#portfolyo"
            className="bg-olive text-olive-foreground hover:bg-olive/90 border-olive w-full rounded-full border px-8 py-3.5 text-xs tracking-[0.22em] uppercase font-medium shadow-lg transition-all duration-300 sm:w-auto inline-flex items-center justify-center gap-2.5"
          >
            <Eye className="size-4" />
            <span>Portfolyoyu Gör</span>
          </a>
          <a
            href="#hizli-teklif"
            className="border-champagne/70 text-champagne hover:bg-champagne hover:text-foreground w-full rounded-full border px-8 py-3.5 text-xs tracking-[0.22em] uppercase backdrop-blur-sm transition-all duration-500 sm:w-auto inline-flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="size-4" />
            <span>Görüşme Sağla</span>
          </a>
        </div>

        {/* Feature Pill Tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-champagne/75 text-xs tracking-widest uppercase">
          <span className="bg-black/35 border border-champagne/25 px-4 py-1.5 rounded-full backdrop-blur-sm">
            ✓ Şeffaf Paket İçerikleri
          </span>
          <span className="bg-black/35 border border-champagne/25 px-4 py-1.5 rounded-full backdrop-blur-sm">
            ✓ Yerinde Kurulum & Nakliye
          </span>
          <span className="bg-black/35 border border-champagne/25 px-4 py-1.5 rounded-full backdrop-blur-sm">
            ✓ Hızlı WhatsApp İletişimi
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
