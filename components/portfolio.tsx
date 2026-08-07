import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const works = [
  {
    image: '/images/raw/img-11.jpeg',
    alt: 'Kapadokya peri bacaları manzaralı kır düğününde, taze çiçekler ve mumlarla bezenmiş ziyafet masası',
    title: 'Kapadokya Masalı',
    place: 'Göreme, Nevşehir',
  },
  {
    image: '/images/raw/img-15.jpeg',
    alt: 'Zeytin bahçesinde akşam saatlerinde beyaz güllerden sütunlar ve kristal şamdanlarla kurgulanan yemek daveti',
    title: 'Gül Bahçesi',
    place: 'Urla, İzmir',
  },
  {
    image: '/images/raw/img-20.jpeg',
    alt: 'Işık zincirleri altında taze okaliptüs yaprakları, şık kadehler ve mumlarla hazırlanan rustik düğün yemeği masası',
    title: 'Zeytin Esintisi',
    place: 'Cunda, Balıkesir',
  },
]

export function Portfolio() {
  return (
    <section
      id="portfolyo"
      className="bg-secondary/60 border-border/60 border-y px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-script text-olive text-2xl italic sm:text-[1.7rem]">
              İlham Veren Anlar
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl md:text-[2.75rem]">
              Gerçekleştirdiğimiz seçkiler
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-[0.92rem] leading-relaxed text-pretty">
            Her proje, mekânın doğasıyla çiftin hikâyesi arasında kurulan sessiz
            bir dengeden doğuyor.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 130} className="group">
              <figure className={i === 1 ? 'lg:mt-[-2.5rem]' : undefined}>
                <div className="arch-lg bg-muted relative aspect-4/5 overflow-hidden">
                  <Image
                    src={w.image}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 92vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 px-1">
                  <span className="font-serif text-lg">{w.title}</span>
                  <span className="text-muted-foreground text-[0.62rem] tracking-[0.2em] uppercase">
                    {w.place}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 text-center lg:mt-6">
          <a
            href="#iletisim"
            className="bg-olive text-olive-foreground hover:bg-olive/90 inline-block rounded-full px-10 py-4 text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300"
          >
            Tüm Projeleri Görüşün
          </a>
        </Reveal>
      </div>
    </section>
  )
}
