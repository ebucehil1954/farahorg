'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SERVICE_CATEGORIES } from '@/lib/services-data'

const navLinks = [
  { href: '/hizmetler', label: 'Hizmetler', hasDropdown: true },
  { href: '/galeri', label: 'Galeri' },
  { href: '/#hakkimizda', label: 'Hakkımızda' },
  { href: '/#surec', label: 'Süreç' },
  { href: '/#iletisim', label: 'İletişim' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
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

  // Close mobile drawer on path change
  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || !isHomePage
          ? 'bg-background/90 border-border/70 border-b py-3 backdrop-blur-md shadow-sm'
          : 'py-5',
      )}
    >
      <nav
        aria-label="Ana menü"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className={cn(
            'font-serif text-lg leading-none tracking-[0.28em] uppercase transition-colors sm:text-xl',
            scrolled || !isHomePage ? 'text-foreground' : 'text-champagne',
          )}
        >
          Farah
          <span
            className={cn(
              'font-script mt-0.5 block text-[0.6rem] tracking-[0.42em] normal-case',
              scrolled || !isHomePage
                ? 'text-muted-foreground'
                : 'text-champagne/70',
            )}
          >
            organizasyon
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href} className="relative group">
              {l.hasDropdown ? (
                <div
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="relative py-2"
                >
                  <Link
                    href={l.href}
                    className={cn(
                      'inline-flex items-center gap-1.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors',
                      scrolled || !isHomePage
                        ? 'text-muted-foreground hover:text-foreground'
                        : 'text-champagne/85 hover:text-champagne',
                    )}
                  >
                    <span>{l.label}</span>
                    <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div
                    className={cn(
                      'absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64 transition-all duration-300',
                      dropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2',
                    )}
                  >
                    <div className="bg-card border border-border/80 rounded-2xl p-3 shadow-xl backdrop-blur-md">
                      <div className="text-[0.6rem] tracking-widest text-muted-foreground uppercase px-3 py-1.5 border-b border-border/50 mb-1">
                        Hizmet Kategorilerimiz
                      </div>
                      {SERVICE_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.slug}
                          href={`/hizmetler/${cat.slug}`}
                          className="flex items-center justify-between px-3 py-2 text-xs rounded-xl hover:bg-olive/10 hover:text-olive transition-colors"
                        >
                          <span className="font-serif text-sm">
                            {cat.title}
                          </span>
                          <span className="font-script text-xs italic text-muted-foreground">
                            {cat.script}
                          </span>
                        </Link>
                      ))}
                      <div className="mt-2 pt-2 border-t border-border/50 text-center">
                        <Link
                          href="/hizmetler"
                          className="text-[0.65rem] tracking-widest uppercase text-olive hover:underline block py-1 font-medium"
                        >
                          Tüm Hizmetleri İncele →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={l.href}
                  className={cn(
                    'group relative text-[0.7rem] tracking-[0.2em] uppercase transition-colors py-2 inline-block',
                    scrolled || !isHomePage
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-champagne/85 hover:text-champagne',
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full',
                      scrolled || !isHomePage ? 'bg-foreground' : 'bg-champagne',
                    )}
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          href="/#iletisim"
          className={cn(
            'hidden rounded-full border px-6 py-2.5 text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-300 lg:inline-block',
            scrolled || !isHomePage
              ? 'bg-olive text-olive-foreground border-olive hover:bg-olive/90'
              : 'border-champagne/50 text-champagne hover:bg-champagne hover:text-foreground',
          )}
        >
          Randevu Al
        </Link>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          className={cn(
            'relative z-50 lg:hidden',
            open || scrolled || !isHomePage ? 'text-foreground' : 'text-champagne',
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
          'bg-background fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 px-6 transition-all duration-400 lg:hidden overflow-y-auto pt-20 pb-10',
          open
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0',
        )}
      >
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif text-2xl tracking-widest uppercase mb-4"
        >
          Farah <span className="font-script text-sm italic">organizasyon</span>
        </Link>

        {navLinks.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 50 + 80}ms` : '0ms' }}
            className={cn(
              'font-serif text-2xl transition-all duration-500 text-center',
              open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
            )}
          >
            {l.label}
          </Link>
        ))}

        <div className="w-full max-w-xs border-t border-border/80 my-2 pt-4">
          <p className="text-[0.62rem] tracking-widest text-muted-foreground uppercase text-center mb-3">
            Hızlı Hizmet Erişimi
          </p>
          <div className="grid grid-cols-2 gap-2 text-center">
            {SERVICE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/hizmetler/${cat.slug}`}
                onClick={() => setOpen(false)}
                className="bg-card border border-border/60 rounded-xl p-2.5 text-xs font-serif hover:border-olive transition-colors"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/#iletisim"
          onClick={() => setOpen(false)}
          className="bg-olive text-olive-foreground mt-2 rounded-full px-8 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase"
        >
          Randevu Al
        </Link>
      </div>
    </header>
  )
}
