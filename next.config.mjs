import fs from 'fs'
import path from 'path'

// Auto-run image copying and metadata extraction on Next.js config initialization
try {
  let srcDir = path.join(process.cwd(), 'görseller')
  if (!fs.existsSync(srcDir) && fs.existsSync(path.join(process.cwd(), 'images'))) {
    srcDir = path.join(process.cwd(), 'images')
  }
  const destDir = path.join(process.cwd(), 'public', 'images', 'raw')
  
  if (fs.existsSync(srcDir)) {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true })
    }
    
    const files = fs.readdirSync(srcDir)
    const jpegs = files.filter(
      (f) => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg')
    )
    
    const metadataList = []
    
    // Helper to extract JPEG dimensions by parsing markers
    const getJpegSize = (filePath) => {
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
        // Ignore parsing errors for individual files
      }
      return null
    }
    
    jpegs.forEach((file, index) => {
      const ext = path.extname(file).toLowerCase()
      const newName = `img-${index + 1}${ext}`
      const srcPath = path.join(srcDir, file)
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
    console.log(`[FARAH CONFIG] Automatically processed ${metadataList.length} images and generated metadata.json`)
  } else {
    console.log('[FARAH CONFIG] Warning: "görseller" directory not found.')
  }
} catch (error) {
  console.error('[FARAH CONFIG] Error in image copy automation:', error)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

export default nextConfig
