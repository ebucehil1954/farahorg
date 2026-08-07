import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/raw/img-12.jpeg"
        alt="Gün batımında zeytinlikler arasında kurulan, şemsiye şeklinde asılı çiçek lambaları ve mumlarla aydınlatılmış şık davet sofrası"
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

      <div className="relative z-10 mx-auto max-w-3xl px-6 pt-24 pb-16 text-center">
        <p className="text-champagne/80 animate-in fade-in slide-in-from-bottom-3 text-[0.62rem] tracking-[0.5em] uppercase duration-1000 sm:text-[0.7rem]">
          Est. 2014 &nbsp;·&nbsp; Butik Davet Tasarımı
        </p>

        <span
          aria-hidden="true"
          className="via-champagne/50 animate-in fade-in mx-auto my-7 block h-px w-20 bg-gradient-to-r from-transparent to-transparent delay-200 duration-1000"
        />

        <h1 className="text-champagne animate-in fade-in slide-in-from-bottom-5 font-serif text-[2.1rem] leading-[1.18] font-normal tracking-tight text-balance delay-150 duration-1000 sm:text-5xl md:text-6xl">
          Hayallerinizi
          <span className="font-script mx-2.5 inline-block text-[1.05em] italic">
            Doğanın Zarafetiyle
          </span>
          Buluşturuyoruz
        </h1>

        <p className="text-champagne/75 animate-in fade-in slide-in-from-bottom-4 mx-auto mt-7 max-w-lg text-sm leading-relaxed text-pretty delay-300 duration-1000 sm:text-base">
          Kır düğünlerinden şehrin kalbindeki davetlere; her detayı sizin
          hikâyeniz için elle kurguluyoruz.
        </p>

        <div className="animate-in fade-in slide-in-from-bottom-4 mt-11 flex flex-col items-center justify-center gap-4 delay-500 duration-1000 sm:flex-row">
          <a
            href="#iletisim"
            className="border-champagne/60 text-champagne hover:bg-champagne hover:text-foreground w-full rounded-full border px-9 py-3.5 text-[0.7rem] tracking-[0.24em] uppercase backdrop-blur-sm transition-all duration-500 sm:w-auto"
          >
            Görüşme Planla
          </a>
          <a
            href="#portfolyo"
            className="text-champagne/70 hover:text-champagne group text-[0.7rem] tracking-[0.24em] uppercase transition-colors duration-300"
          >
            Portfolyoyu Gör
            <span
              aria-hidden="true"
              className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
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
