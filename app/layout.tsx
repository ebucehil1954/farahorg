import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost, Cormorant_Upright } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorant = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Farah Organizasyon | Düğün & Özel Davet Tasarımı',
  description:
    'Hayallerinizi doğanın zarafetiyle buluşturuyoruz. Düğün, nişan, kına ve özel davetler için butik organizasyon ve tasarım hizmeti.',
  generator: 'v0.app',
  keywords: [
    'düğün organizasyonu',
    'kır düğünü',
    'nişan organizasyonu',
    'kına gecesi',
    'boho düğün',
    'Farah Organizasyon',
  ],
  openGraph: {
    title: 'Farah Organizasyon | Düğün & Özel Davet Tasarımı',
    description:
      'Hayallerinizi doğanın zarafetiyle buluşturuyoruz. Butik organizasyon ve tasarım.',
    type: 'website',
    locale: 'tr_TR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F9F7F2',
  width: 'device-width',
  initialScale: 1,
}

import fs from 'fs'
import path from 'path'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Auto-run image copying and metadata extraction on render
  try {
    const rootPath = process.cwd()
    
    // Cleanup temporary files once processed
    const tempPage = path.join(rootPath, 'app', 'gallery', 'page.tsx')
    if (fs.existsSync(tempPage)) {
      fs.unlinkSync(tempPage)
    }
    const debugLog = path.join(rootPath, 'public', 'cwd-contents.json')
    if (fs.existsSync(debugLog)) {
      fs.unlinkSync(debugLog)
    }

    const srcDir = path.join(rootPath, 'görseller')
    const rootImagesPath = path.join(rootPath, 'images')
    const destDir = path.join(rootPath, 'public', 'images', 'raw')
    
    // Check which directory exists and use it
    let srcDirResolved = srcDir
    if (!fs.existsSync(srcDirResolved) && fs.existsSync(rootImagesPath)) {
      srcDirResolved = rootImagesPath
    }
    
    if (fs.existsSync(srcDirResolved)) {
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
      }
      
      const files = fs.readdirSync(srcDirResolved)
      const jpegs = files.filter(
        (f) => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg')
      )
      
      const metadataList: any[] = []
      
      // Helper to extract JPEG dimensions by parsing markers
      const getJpegSize = (filePath: string) => {
        try {
          const buffer = fs.readFileSync(filePath)
          if (buffer.length < 4) return null
          if (buffer[0] !== 0xFF || buffer[1] !== 0xD8) return null
          
          let i = 2
          while (i < buffer.length - 8) {
            if (buffer[i] === 0xFF) {
              const marker = buffer[i + 1]
              if (marker === 0xC0 || marker === 0xC2) {
                const height = buffer.readUInt16BE(i + 5)
                const width = buffer.readUInt16BE(i + 7)
                return { width, height }
              } else if (marker === 0xD9 || marker === 0xDA) {
                break
              } else {
                const length = buffer.readUInt16BE(i + 2)
                i += length + 2
              }
            } else {
              i++
            }
          }
        } catch (err) {
          // Ignore
        }
        return null
      }
      
      jpegs.forEach((file, index) => {
        const ext = path.extname(file).toLowerCase()
        const newName = `img-${index + 1}${ext}`
        const srcPath = path.join(srcDirResolved, file)
        const destPath = path.join(destDir, newName)
        
        // Copy if not already copied or if sizes differ
        const srcStat = fs.statSync(srcPath)
        let shouldCopy = true
        if (fs.existsSync(destPath)) {
          const destStat = fs.statSync(destPath)
          if (srcStat.size === destStat.size) {
            shouldCopy = false
          }
        }
        
        if (shouldCopy) {
          fs.copyFileSync(srcPath, destPath)
        }
        
        const size = getJpegSize(srcPath)
        let orientation = 'unknown'
        let aspect = 1.0
        if (size) {
          aspect = size.width / size.height
          orientation = size.width > size.height ? 'landscape' : 'portrait'
        }
        
        metadataList.push({
          id: index + 1,
          originalName: file,
          cleanName: newName,
          publicPath: `/images/raw/${newName}`,
          width: size ? size.width : null,
          height: size ? size.height : null,
          aspectRatio: aspect,
          orientation: orientation,
          fileSizeBytes: srcStat.size
        })
      })
      
      fs.writeFileSync(
        path.join(destDir, 'metadata.json'),
        JSON.stringify(metadataList, null, 2)
      )
    }
  } catch (error) {
    console.error('Error in layout copy:', error)
  }

  return (
    <html
      lang="tr"
      className={`bg-background ${playfair.variable} ${jost.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
