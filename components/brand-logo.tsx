'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BrandLogoProps {
  scrolled?: boolean
  isHomePage?: boolean
  className?: string
  onClick?: () => void
  showCity?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function BrandLogo({
  scrolled = true,
  isHomePage = false,
  className,
  onClick,
  showCity = true,
  size = 'md',
}: BrandLogoProps) {
  const isLight = !scrolled && isHomePage

  return (
    <Link
      href="/"
      onClick={onClick}
      className={cn(
        'group flex flex-col transition-all duration-300 select-none',
        className
      )}
    >
      {/* Primary Brand Name */}
      <div className="flex items-baseline gap-1.5">
        <span
          className={cn(
            'font-serif uppercase font-light tracking-[0.32em] leading-none transition-colors duration-300',
            size === 'sm' && 'text-lg',
            size === 'md' && 'text-xl sm:text-2xl',
            size === 'lg' && 'text-2xl sm:text-3xl',
            isLight
              ? 'text-champagne group-hover:text-white'
              : 'text-foreground group-hover:text-olive'
          )}
        >
          Farah
        </span>
      </div>

      {/* Minimal Subtitle: ORGANİZASYON · NEVŞEHİR */}
      <div
        className={cn(
          'flex items-center gap-1.5 mt-1 transition-colors duration-300',
          size === 'sm' && 'text-[0.55rem]',
          size === 'md' && 'text-[0.62rem] sm:text-[0.66rem]',
          size === 'lg' && 'text-[0.72rem]'
        )}
      >
        <span
          className={cn(
            'tracking-[0.36em] uppercase font-medium leading-none',
            isLight ? 'text-champagne/80' : 'text-muted-foreground'
          )}
        >
          Organizasyon
        </span>

        {showCity && (
          <>
            <span
              className={cn(
                'text-[0.5rem] opacity-60',
                isLight ? 'text-champagne' : 'text-olive'
              )}
            >
              •
            </span>
            <span
              className={cn(
                'tracking-[0.28em] uppercase font-semibold leading-none',
                isLight ? 'text-champagne/95' : 'text-olive'
              )}
            >
              Nevşehir
            </span>
          </>
        )}
      </div>
    </Link>
  )
}
