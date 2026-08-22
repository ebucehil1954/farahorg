'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Phone, MessageCircle, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SERVICE_CATEGORIES } from '@/lib/services-data'
import { BrandLogo } from '@/components/brand-logo'

const navLinks = [
  { href: '/hizmetler', label: 'Hizmetler', hasDropdown: true },
  { href: '/katalog', label: 'Tasarım Kataloğu' },
  { href: '/#portfolyo', label: 'Portfolyo' },
  { href: '/#hakkimizda', label: 'Hakkımızda' },
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
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.touchAction = ''
    }
  }, [open])

  // Close mobile drawer on path change
  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled || !isHomePage
            ? 'bg-background/95 border-border/80 border-b py-3.5 backdrop-blur-lg shadow-sm'
            : 'py-5 bg-gradient-to-b from-black/70 via-black/30 to-transparent',
        )}
      >
        <nav
          aria-label="Ana menü"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          {/* CSS Luxury Brand Logo */}
          <BrandLogo scrolled={scrolled} isHomePage={isHomePage} />

          {/* Desktop Navigation Links */}
          <ul className="hidden items-center gap-7 xl:gap-9 lg:flex">
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
                        'inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.2em] uppercase transition-colors font-medium',
                        scrolled || !isHomePage
                          ? 'text-muted-foreground hover:text-foreground'
                          : 'text-champagne/90 hover:text-champagne',
                      )}
                    >
                      <span>{l.label}</span>
                      <ChevronDown
                        className={cn(
                          'size-3.5 transition-transform duration-200',
                          dropdownOpen && 'rotate-180 text-olive',
                        )}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className={cn(
                        'absolute left-1/2 -translate-x-1/2 top-full pt-3 w-88 transition-all duration-300',
                        dropdownOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2 pointer-events-none',
                      )}
                    >
                      <div className="bg-card/95 backdrop-blur-xl border border-border/90 rounded-3xl p-3.5 shadow-2xl">
                        <div className="flex items-center justify-between px-3 py-2 border-b border-border/60 mb-1.5">
                          <span className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase font-semibold">
                            Hizmetlerimiz (Nevşehir & Kapadokya)
                          </span>
                          <Sparkles className="size-3 text-olive" />
                        </div>
                        <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
                          {SERVICE_CATEGORIES.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/hizmetler/${cat.slug}`}
                              className="flex items-center justify-between px-3 py-2.5 text-xs rounded-2xl hover:bg-olive/10 hover:text-olive transition-colors group/item"
                            >
                              <span className="font-serif text-[0.84rem] text-foreground/90 group-hover/item:text-olive font-medium">
                                {cat.title}
                              </span>
                              <span className="font-script text-xs italic text-muted-foreground group-hover/item:text-olive/80">
                                {cat.script}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2.5 border-t border-border/60 text-center">
                          <Link
                            href="/hizmetler"
                            className="text-[0.68rem] tracking-widest uppercase text-olive hover:underline inline-flex items-center gap-1.5 py-1 font-semibold"
                          >
                            <span>Tüm Hizmet Paketlerini İncele</span>
                            <ArrowRight className="size-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={l.href}
                    className={cn(
                      'group relative text-[0.72rem] tracking-[0.2em] uppercase transition-colors py-2 inline-block font-medium',
                      scrolled || !isHomePage
                        ? 'text-muted-foreground hover:text-foreground'
                        : 'text-champagne/90 hover:text-champagne',
                    )}
                  >
                    {l.label}
                    <span
                      className={cn(
                        'absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full rounded-full',
                        scrolled || !isHomePage ? 'bg-olive' : 'bg-champagne',
                      )}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#hizli-teklif"
              className={cn(
                'rounded-full px-7 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase font-semibold transition-all duration-300 shadow-sm inline-flex items-center gap-2 hover:scale-[1.02]',
                scrolled || !isHomePage
                  ? 'bg-olive text-olive-foreground hover:bg-olive/90'
                  : 'bg-champagne text-stone-900 hover:bg-champagne/90 shadow-lg',
              )}
            >
              <Sparkles className="size-3.5" />
              <span>Teklif Al</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            className={cn(
              'relative z-50 p-2.5 rounded-full lg:hidden transition-colors border shadow-sm',
              scrolled || !isHomePage
                ? 'text-foreground bg-card border-border/80 hover:bg-muted'
                : 'text-champagne bg-black/40 border-champagne/30 backdrop-blur-md hover:bg-black/60',
            )}
          >
            {open ? (
              <X className="size-5.5 text-foreground" />
            ) : (
              <Menu className="size-5.5" />
            )}
          </button>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-2xl transition-all duration-400 lg:hidden overflow-hidden',
          open
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none',
        )}
      >
        {/* Top bar inside mobile drawer */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-border/70">
          <BrandLogo scrolled={true} isHomePage={false} onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menüyü kapat"
            className="p-2.5 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Mobile Navigation Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Main Links */}
          <div className="space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-3.5 px-3 rounded-2xl font-serif text-lg text-foreground hover:bg-olive/10 hover:text-olive transition-colors"
              >
                <span>{l.label}</span>
                <ArrowRight className="size-4 text-muted-foreground opacity-60" />
              </Link>
            ))}
          </div>

          {/* Hizmetlerimiz Quick Grid */}
          <div className="border-t border-border/80 pt-5">
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase font-semibold">
                Hizmet Kategorilerimiz
              </p>
              <span className="text-[0.62rem] text-olive font-medium">8 Paket Seçeneği</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/hizmetler/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="bg-card border border-border/70 rounded-2xl p-3 text-left hover:border-olive hover:bg-olive/5 transition-all flex flex-col justify-between"
                >
                  <span className="font-serif text-xs font-semibold text-foreground/90 leading-tight">
                    {cat.title}
                  </span>
                  <span className="font-script text-[0.72rem] text-muted-foreground italic mt-1">
                    {cat.script}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Contact and CTA Buttons */}
          <div className="border-t border-border/80 pt-5 space-y-3 pb-6">
            <Link
              href="/#hizli-teklif"
              onClick={() => setOpen(false)}
              className="w-full bg-olive text-olive-foreground hover:bg-olive/90 rounded-full py-4 px-6 text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Sparkles className="size-4" />
              <span>Hızlı Özel Teklif Al</span>
            </Link>

            <a
              href="https://wa.me/905300000000?text=Merhaba%20Farah%20Organizasyon%2C%20Nev%C5%9Fehir%20Kapadokya%20organizasyonlar%C4%B1%20i%C3%A7in%20bilgi%20ve%20teklif%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-3.5 px-6 text-xs uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <MessageCircle className="size-4 fill-current" />
              <span>WhatsApp Danışma Hattı</span>
            </a>

            <div className="text-center pt-2">
              <a
                href="tel:+905300000000"
                className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 font-medium"
              >
                <Phone className="size-3.5 text-olive" />
                <span>+90 530 000 00 00 (Nevşehir / Kapadokya)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
