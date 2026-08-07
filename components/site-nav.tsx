'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#portfolyo', label: 'Portfolyo' },
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#surec', label: 'Süreç' },
  { href: '#iletisim', label: 'İletişim' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Hide the solid bar once the dark terracotta footer reaches the nav,
      // so the cream chrome doesn't cut a seam across it.
      const footer = document.getElementById('iletisim')
      const overFooter = footer
        ? footer.getBoundingClientRect().top <= 72
        : false
      setScrolled(window.scrollY > 24 && !overFooter)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/90 border-border/70 border-b py-3 backdrop-blur-md'
          : 'py-5',
      )}
    >
      <nav
        aria-label="Ana menü"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className={cn(
            'font-serif text-lg leading-none tracking-[0.28em] uppercase transition-colors sm:text-xl',
            scrolled ? 'text-foreground' : 'text-champagne',
          )}
        >
          Farah
          <span
            className={cn(
              'font-script mt-0.5 block text-[0.6rem] tracking-[0.42em] normal-case',
              scrolled ? 'text-muted-foreground' : 'text-champagne/70',
            )}
          >
            organizasyon
          </span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  'group relative text-[0.7rem] tracking-[0.2em] uppercase transition-colors',
                  scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-champagne/85 hover:text-champagne',
                )}
              >
                {l.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full',
                    scrolled ? 'bg-foreground' : 'bg-champagne',
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#iletisim"
          className={cn(
            'hidden rounded-full border px-6 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-300 lg:inline-block',
            scrolled
              ? 'bg-olive text-olive-foreground border-olive hover:bg-olive/90'
              : 'border-champagne/50 text-champagne hover:bg-champagne hover:text-foreground',
          )}
        >
          Randevu Al
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          className={cn(
            'relative z-50 lg:hidden',
            open || scrolled ? 'text-foreground' : 'text-champagne',
          )}
        >
          {open ? (
            <X className="size-6" strokeWidth={1.25} />
          ) : (
            <Menu className="size-6" strokeWidth={1.25} />
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cn(
          'bg-background fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-400 lg:hidden',
          open
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0',
        )}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 60 + 80}ms` : '0ms' }}
            className={cn(
              'font-serif text-3xl transition-all duration-500',
              open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
            )}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#iletisim"
          onClick={() => setOpen(false)}
          className="bg-olive text-olive-foreground mt-4 rounded-full px-8 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase"
        >
          Randevu Al
        </a>
      </div>
    </header>
  )
}
