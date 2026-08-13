import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function About() {
  return (
    <section
      id="hakkimizda"
      className="px-5 py-24 sm:px-8 sm:py-32 lg:py-40"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="arch bg-muted relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden lg:mx-0">
            <Image
              src="/images/raw/img-14.jpeg"
              alt="Kapadokya dokusunda altın kenarlı tabaklar, şık kadehler ve taze beyaz güllerle bezenmiş davet sofrası"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="text-muted-foreground text-[0.62rem] tracking-[0.42em] uppercase">
            Hakkımızda
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.6rem]">
            Nevşehir ve Kapadokya'da
            <span className="font-script ml-2.5 italic">
              Zarafetin Peşinde
            </span>
          </h2>

          <div className="text-muted-foreground mt-7 space-y-5 text-[0.95rem] leading-relaxed text-pretty">
            <p>
              Farah Organizasyon, 2014&apos;ten bu yana Nevşehir, Kapadokya, Kayseri, Aksaray, Niğde ve Kırşehir bölgesinde düğün, kına, nişan ve vadide özel teklif organizasyonlarına editoryal bir estetik kazandırıyor.
            </p>
            <p>
              Peri bacalarının büyüleyici silüeti, otantik taş konaklar, bağ evleri ve salonlarda; ışıklı ahşap taglar, lüks kına tahtları, canlı çiçekler ve mum ışıkları ile hayal ettiğiniz atmosferi sıfırdan kuruyoruz.
            </p>
          </div>

          <dl className="border-border/70 mt-11 grid grid-cols-3 gap-6 border-t pt-8">
            {[
              { k: '350+', v: 'Bölgesel Etkinlik' },
              { k: '12', v: 'Yıllık Tecrübe' },
              { k: '%100', v: 'Şeffaf Bütçe' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-2xl sm:text-[1.75rem]">
                  {s.k}
                </dt>
                <dd className="text-muted-foreground mt-1.5 text-[0.66rem] tracking-[0.16em] uppercase">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
