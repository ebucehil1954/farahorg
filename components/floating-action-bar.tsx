'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Sparkles, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingActionBar() {
  const [expanded, setExpanded] = useState<boolean>(true)

  const phone = '+90 530 000 00 00'
  const whatsappUrl = `https://wa.me/905300000000?text=${encodeURIComponent(
    'Merhaba Farah Organizasyon! Nevşehir Kapadokya organizasyon hizmetleriniz hakkında bilgi ve teklif almak istiyorum.'
  )}`

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Expanded quick action items */}
      {expanded && (
        <div className="flex flex-col items-end gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
          {/* Quick Quote Shortcut */}
          <a
            href="/#hizli-teklif"
            className="group flex items-center gap-2.5 rounded-full bg-card/95 border border-border/80 px-4 py-2.5 text-xs text-foreground shadow-xl backdrop-blur-md hover:border-olive transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-[0.68rem] tracking-wider uppercase font-semibold hidden sm:inline">
              Özel Teklif Al
            </span>
            <span className="size-8 rounded-full bg-olive/15 text-olive flex items-center justify-center group-hover:bg-olive group-hover:text-olive-foreground transition-colors">
              <Sparkles className="size-4" />
            </span>
          </a>

          {/* Direct Call Button */}
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="group flex items-center gap-2.5 rounded-full bg-card/95 border border-border/80 px-4 py-2.5 text-xs text-foreground shadow-xl backdrop-blur-md hover:border-olive transition-all duration-300 hover:scale-[1.02]"
          >
            <span className="text-[0.68rem] tracking-wider uppercase font-semibold hidden sm:inline">
              Hemen Ara: {phone}
            </span>
            <span className="size-8 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Phone className="size-4" />
            </span>
          </a>

          {/* Main WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 text-xs font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="size-5 fill-current" />
            <span className="tracking-wider uppercase text-[0.7rem]">
              WhatsApp İle Yazın
            </span>
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-white"></span>
            </span>
          </a>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-label={expanded ? 'Hızlı erişimi kapat' : 'Hızlı erişimi aç'}
        className={cn(
          'size-11 rounded-full border border-border/80 shadow-lg flex items-center justify-center text-xs transition-all backdrop-blur-md hover:scale-105',
          expanded ? 'bg-card text-muted-foreground hover:text-foreground' : 'bg-olive text-olive-foreground'
        )}
      >
        {expanded ? <X className="size-4.5" /> : <MessageCircle className="size-5 fill-current" />}
      </button>
    </div>
  )
}
