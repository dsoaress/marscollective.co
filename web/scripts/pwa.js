const fs = require('fs')
const Jimp = require('jimp')
const prettier = require('prettier')

const meta = require('../../content/meta')

;(async () => {
  const assetsDir = './src/assets'
  const publicDir = './public'
  const iconsDir = './public/icons'

  const { title, shortTitle, icon, backgroundColor, themeColor } = meta

  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, {
      recursive: true
    })
  }

  const iconPath = `${assetsDir}/${icon}`

  Jimp.read(iconPath, function (err, lenna) {
    if (err) throw err
    lenna.resize(512, 512).write(`${iconsDir}/icon-512x512.png`)
    lenna.resize(384, 384).write(`${iconsDir}/icon-384x384.png`)
    lenna.resize(256, 256).write(`${iconsDir}/icon-256x256.png`)
    lenna.resize(192, 192).write(`${iconsDir}/icon-192x192.png`)
    lenna.resize(144, 144).write(`${iconsDir}/icon-144x144.png`)
    lenna.resize(96, 96).write(`${iconsDir}/icon-96x96.png`)
    lenna.resize(72, 72).write(`${iconsDir}/icon-72x72.png`)
    lenna.resize(48, 48).write(`${iconsDir}/icon-48x48.png`)
    lenna.resize(32, 32).write(`${iconsDir}/icon-32x32.png`)
  })

  const manifest = `
      {
        "name": "${title}",
        "short_name": "${shortTitle}",
        "start_url": "/",
        "background_color": "${backgroundColor}",
        "theme_color": "${themeColor}",
        "display": "fullscreen",
        "icons": [
          {
            "purpose": "any maskable",
            "src": "icons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "purpose": "any maskable",
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      }
    `

  const formattedManifest = prettier.format(manifest, {
    parser: 'json'
  })

  fs.writeFileSync(`${publicDir}/manifest.json`, formattedManifest)
})()
