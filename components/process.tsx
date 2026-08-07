import { Leaf, PenLine, Sparkles, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: HeartHandshake,
    title: 'Tanışma',
    text: 'Hikâyenizi, beklentilerinizi ve bütçenizi dinlediğimiz samimi bir görüşme.',
  },
  {
    icon: PenLine,
    title: 'Tasarım',
    text: 'Renk paleti, malzeme kartları ve mekân yerleşimini içeren özel konsept sunumu.',
  },
  {
    icon: Leaf,
    title: 'Hazırlık',
    text: 'Tedarik, üretim ve prova; tüm ekiplerin koordinasyonunu biz üstleniyoruz.',
  },
  {
    icon: Sparkles,
    title: 'Gün',
    text: 'Kurulumdan son davetliye kadar sahada olan tam zamanlı bir ekip.',
  },
]

export function Process() {
  return (
    <section
      id="surec"
      className="bg-secondary/60 border-border/60 border-y px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-script text-olive text-2xl italic sm:text-[1.7rem]">
            Nasıl Çalışıyoruz
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-[1.2] text-balance sm:text-4xl">
            Dört adımda, telaşsız
          </h2>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <div className="border-border/80 flex size-11 items-center justify-center rounded-full border">
                <s.icon
                  className="text-olive size-5"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
              <p className="text-muted-foreground mt-3 text-[0.9rem] leading-relaxed text-pretty">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
