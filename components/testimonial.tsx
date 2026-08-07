import { Reveal } from '@/components/reveal'

export function Testimonial() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="mx-auto max-w-3xl text-center">
        <blockquote>
          <p className="font-serif text-[1.4rem] leading-[1.5] text-balance italic sm:text-[1.8rem] md:text-[2.1rem]">
            &ldquo;Zeytin ağaçlarının altında, sanki hep oradaymış gibi duran
            bir masa kurdular. Misafirlerimiz hâlâ o akşamdan bahsediyor.&rdquo;
          </p>
        </blockquote>
        <figcaption className="mt-9">
          <span
            aria-hidden="true"
            className="via-border mx-auto mb-6 block h-px w-12 bg-gradient-to-r from-transparent to-transparent"
          />
          <span className="font-script block text-xl italic">
            Elif &amp; Kerem
          </span>
          <span className="text-muted-foreground mt-2 block text-[0.62rem] tracking-[0.28em] uppercase">
            Haziran 2025 &nbsp;·&nbsp; Urla
          </span>
        </figcaption>
      </Reveal>
    </section>
  )
}
