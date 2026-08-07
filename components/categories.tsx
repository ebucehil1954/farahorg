import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const categories = [
  {
    title: 'Düğün',
    script: 'Sonsuza Dair',
    image: '/images/raw/img-4.jpeg',
    alt: 'Kapadokya peri bacaları önünde çiçekli sütunlar ve beyaz koltukla hazırlanan boho düğün seremonisi alanı',
    text: 'Zeytinliklerde, kanyonlarda ya da bağ evlerinde; mekân tasarımından nikâh kürsüsüne tüm seremoni kurgusu.',
  },
  {
    title: 'Nişan',
    script: 'İlk Söz',
    image: '/images/raw/img-1.jpeg',
    alt: 'Beyaz kağıt çiçekler ve neon ışıkla süslenmiş yuvarlak arka planlı modern nişan masası dekorasyonu',
    text: 'Ev sıcaklığında ya da butik mekânlarda; hikâyenizi fısıldayan samimi ve incelikli nişan davetleri.',
  },
  {
    title: 'Kına',
    script: 'Geleneğin Işığı',
    image: '/images/raw/img-21.jpeg',
    alt: 'Kırmızı kadife taht, kırmızı güllerden kemer ve kına gecesi neon yazısı ile hazırlanmış kına köşesi',
    text: 'Kırmızı kadife tahtlar, el yapımı bakır tepsiler ve loş mum ışığıyla yeniden yorumlanmış kına gecesi tasarımları.',
  },
  {
    title: 'Özel Davetler',
    script: 'Eşsiz Anlar',
    image: '/images/raw/img-19.jpeg',
    alt: 'Tavandan sarkan yeşil yosunlar ve çiçeklerle donatılmış ahşap çardak altında lüks yemek masası kurgusu',
    text: 'Doğum günleri, bridal shower partileri ve kurumsal gala yemekleri için tematik masa ve mekân enstalasyonları.',
  },
]

export function Categories() {
  return (
    <section id="hizmetler" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground text-[0.62rem] tracking-[0.42em] uppercase">
            Hizmetlerimiz
          </p>
          <h2 className="mt-5 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
            Her tören için
            <span className="font-script ml-2.5 italic">kendine has</span> bir
            dil
          </h2>
          <span
            aria-hidden="true"
            className="via-border mx-auto mt-7 block h-px w-16 bg-gradient-to-r from-transparent to-transparent"
          />
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={i * 130}
              className={`group ${
                i === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <article>
                <div className="arch bg-muted relative aspect-3/4 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[oklch(0.25_0.04_39)]/55 via-transparent to-transparent"
                  />
                  <span className="font-script text-champagne absolute inset-x-0 bottom-6 text-center text-xl italic">
                    {c.script}
                  </span>
                </div>

                <div className="px-2 pt-7 text-center">
                  <h3 className="font-serif text-[1.6rem] tracking-wide">
                    {c.title}
                  </h3>
                  <p className="text-muted-foreground mx-auto mt-3.5 max-w-xs text-[0.92rem] leading-relaxed text-pretty">
                    {c.text}
                  </p>
                  <a
                    href="#iletisim"
                    className="text-foreground/70 hover:text-olive mt-6 inline-block border-b border-current pb-1 text-[0.66rem] tracking-[0.22em] uppercase transition-colors duration-300"
                  >
                    Detaylı Bilgi
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
