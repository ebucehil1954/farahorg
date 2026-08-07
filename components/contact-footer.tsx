import { Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { InstagramIcon } from '@/components/instagram-icon'

const fields = [
  { id: 'name', label: 'Ad Soyad', type: 'text', autoComplete: 'name' },
  { id: 'email', label: 'E-posta', type: 'email', autoComplete: 'email' },
  { id: 'phone', label: 'Telefon', type: 'tel', autoComplete: 'tel' },
  { id: 'date', label: 'Tahmini Tarih', type: 'date', autoComplete: 'off' },
]

export function ContactFooter() {
  return (
    <footer
      id="iletisim"
      className="bg-terracotta text-terracotta-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          {/* Left: invitation + details */}
          <Reveal>
            <p className="text-terracotta-foreground/60 text-[0.62rem] tracking-[0.42em] uppercase">
              İletişim
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-[1.18] text-balance sm:text-4xl md:text-[2.9rem]">
              Hikâyenizi
              <span className="font-script mx-2.5 italic">
                anlatmaya başlayın
              </span>
            </h2>
            <p className="text-terracotta-foreground/70 mt-6 max-w-md text-[0.95rem] leading-relaxed text-pretty">
              Formu doldurun ya da doğrudan bize yazın. 48 saat içinde
              dönüş yapıyoruz.
            </p>

            <ul className="mt-12 space-y-5">
              {[
                {
                  icon: Phone,
                  text: '+90 232 000 00 00',
                  href: 'tel:+902320000000',
                },
                {
                  icon: Mail,
                  text: 'merhaba@farahorganizasyon.com',
                  href: 'mailto:merhaba@farahorganizasyon.com',
                },
                {
                  icon: MapPin,
                  text: 'Alsancak, İzmir — randevu ile',
                  href: null,
                },
              ].map((c) => (
                <li key={c.text} className="flex items-center gap-4">
                  <c.icon
                    className="text-terracotta-foreground/55 size-4 shrink-0"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                  {c.href ? (
                    <a
                      href={c.href}
                      className="hover:text-terracotta-foreground text-terracotta-foreground/85 text-[0.92rem] transition-colors duration-300"
                    >
                      {c.text}
                    </a>
                  ) : (
                    <span className="text-terracotta-foreground/85 text-[0.92rem]">
                      {c.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-terracotta-foreground/30 hover:bg-terracotta-foreground/10 mt-12 inline-flex items-center gap-3 rounded-full border px-6 py-3 text-[0.66rem] tracking-[0.2em] uppercase transition-colors duration-300"
            >
              <InstagramIcon className="size-4" />
              Instagram
            </a>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={140}>
            <form className="grid gap-7 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className="group">
                  <label
                    htmlFor={f.id}
                    className="text-terracotta-foreground/60 block text-[0.62rem] tracking-[0.24em] uppercase"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    autoComplete={f.autoComplete}
                    className="border-terracotta-foreground/25 text-terracotta-foreground placeholder:text-terracotta-foreground/40 focus:border-terracotta-foreground/70 mt-2.5 w-full border-b bg-transparent pb-2.5 text-[0.95rem] outline-none transition-colors duration-300 [color-scheme:dark]"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="text-terracotta-foreground/60 block text-[0.62rem] tracking-[0.24em] uppercase"
                >
                  Davetinizden Bahsedin
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="border-terracotta-foreground/25 text-terracotta-foreground placeholder:text-terracotta-foreground/40 focus:border-terracotta-foreground/70 mt-2.5 w-full resize-none border-b bg-transparent pb-2.5 text-[0.95rem] leading-relaxed outline-none transition-colors duration-300"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-olive text-olive-foreground hover:bg-olive/90 w-full rounded-full px-10 py-4 text-[0.68rem] tracking-[0.24em] uppercase transition-colors duration-300 sm:w-auto"
                >
                  Talebi Gönder
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="border-terracotta-foreground/15 mt-20 flex flex-col items-center justify-between gap-5 border-t pt-9 sm:flex-row">
          <a href="#top" className="text-center sm:text-left">
            <span className="font-serif text-base tracking-[0.28em] uppercase">
              Farah
            </span>
            <span className="font-script text-terracotta-foreground/55 mt-0.5 block text-[0.62rem] tracking-[0.4em]">
              organizasyon
            </span>
          </a>
          <p className="text-terracotta-foreground/50 text-[0.66rem] tracking-[0.16em] uppercase">
            © {new Date().getFullYear()} Farah Organizasyon — Tüm hakları
            saklıdır
          </p>
        </div>
      </div>
    </footer>
  )
}
