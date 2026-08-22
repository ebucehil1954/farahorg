'use client'

import Image from 'next/image'
import { Star, MapPin, CheckCircle2, Heart } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon } from '@/components/instagram-icon'

interface Testimonial {
  id: string
  name: string
  event: string
  location: string
  rating: number
  date: string
  comment: string
  image: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Merve & Selim K.',
    event: 'Kapadokya Evlilik Teklifi',
    location: 'Kızılçukur Vadisi, Nevşehir',
    rating: 5,
    date: 'Temmuz 2026',
    comment:
      'Kızılçukur Vadisi\'nde gün batımında balonlar süzülürken kurdukları piknik masası ve MARRY ME ışıklı harfleri tek kelimeyle kusursuzdu! Keman performansı ve gizli fotoğraf çekimi hayatımızın en anlamlı anı oldu.',
    image: '/images/raw/img-10.jpeg',
  },
  {
    id: '2',
    name: 'Büşra & Tolga A.',
    event: 'Lüks Kına Gecesi',
    location: 'Nevşehir Merkez Balo Salonu',
    rating: 5,
    date: 'Haziran 2026',
    comment:
      'Bordo kadife cibinlikli kına tahtı ve nedime ekibimizin koreografisi salondaki tüm davetlileri büyüledi! Tefler, ikram masası ve kaftan kalitesi harikaydı. Emeğinize sağlık.',
    image: '/images/raw/img-21.jpeg',
  },
  {
    id: '3',
    name: 'Elif & Burak C.',
    event: 'Bağ Evinde Kır Düğünü',
    location: 'Ürgüp Bağ Evi, Kapadokya',
    rating: 5,
    date: 'Mayıs 2026',
    comment:
      'Bağ evimizin bahçesini tıpkı hayal ettiğimiz gibi zeytin dalları, şamdanlar ve peri ışıklarıyla donattılar. Sandalye giydirmelerinden yapay sis şovuna kadar her şey saat gibi tıkır tıkır işledi.',
    image: '/images/raw/img-5.jpeg',
  },
  {
    id: '4',
    name: 'Zeynep & Caner D.',
    event: 'Butik Ev Nişanı',
    location: 'Nevşehir',
    rating: 5,
    date: 'Nisan 2026',
    comment:
      'Evimizin salonuna kurdukları melek kanadı tag ve ışıklı nişan masası fotoğraf çekimleri için inanılmaz güzeldi. İsimli nişan tepsimiz ve damat kahve seti harika bir anı olarak kaldı.',
    image: '/images/raw/img-1.jpeg',
  },
]

const INSTAGRAM_POSTS = [
  { id: 1, src: '/images/raw/img-4.jpeg', likes: '1.4b', category: 'Kapadokya Düğünü' },
  { id: 2, src: '/images/raw/img-12.jpeg', likes: '2.1b', category: 'Cave Teras Seremonisi' },
  { id: 3, src: '/images/raw/img-2.jpeg', likes: '980', category: 'Boho Nişan Masası' },
  { id: 4, src: '/images/raw/img-16.jpeg', likes: '1.8b', category: 'Saray Kına Tahtı' },
]

export function SocialProofTestimonials() {
  return (
    <section id="musteri-yorumları" className="px-5 py-24 sm:px-8 sm:py-32 bg-secondary/30 relative">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs text-amber-700 uppercase tracking-widest font-medium mb-4">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <span>Google Haritalar 5.0 / 5.0 Onaylı Çift Yorumları</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">
            Mutluluğuna Tanık Olduğumuz Çiftlerimiz
          </h2>
          <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
            Nevşehir, Kapadokya, Aksaray ve çevre illerde organizasyonlarını üstlendiğimiz yüzlerce mutlu çiftin gerçek deneyimleri.
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 100}>
              <div className="bg-card border border-border/80 rounded-3xl p-7 shadow-sm h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[0.68rem] text-muted-foreground uppercase tracking-widest">
                      {t.date}
                    </span>
                  </div>

                  <p className="mt-5 text-foreground/90 text-sm leading-relaxed italic font-sans">
                    "{t.comment}"
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-full overflow-hidden relative bg-muted shrink-0 border border-border">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base text-foreground font-medium flex items-center gap-1.5">
                        <span>{t.name}</span>
                        <CheckCircle2 className="size-3.5 text-emerald-600" />
                      </h4>
                      <p className="text-[0.7rem] text-olive uppercase tracking-wider font-medium">
                        {t.event}
                      </p>
                    </div>
                  </div>

                  <span className="text-[0.65rem] text-muted-foreground flex items-center gap-1">
                    <MapPin className="size-3 text-olive" />
                    <span>{t.location}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Live Instagram Showcase */}
        <Reveal delay={150} className="mt-20 pt-16 border-t border-border/60">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-olive font-medium flex items-center gap-2">
                <InstagramIcon className="size-4" />
                <span>Canlı Sosyal Medya Akışı</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mt-1">
                @farah.organizasyon Instagram'da Biz
              </h3>
            </div>
            <a
              href="https://www.instagram.com/farah.organizasyon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-6 py-3 text-xs uppercase tracking-widest font-medium inline-flex items-center gap-2 transition-colors shadow-sm"
            >
              <InstagramIcon className="size-4" />
              <span>Instagram'da Takip Edin</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/farah.organizasyon"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative arch aspect-square overflow-hidden bg-muted shadow-sm border border-border/50 block"
              >
                <Image
                  src={post.src}
                  alt={post.category}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-1 p-2 text-center">
                  <InstagramIcon className="size-6" />
                  <span className="text-xs font-medium">{post.category}</span>
                  <span className="text-[0.65rem] opacity-80 flex items-center gap-1">
                    <Heart className="size-3 fill-current text-rose-500" />
                    <span>{post.likes}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
