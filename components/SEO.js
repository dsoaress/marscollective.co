import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { imageToUrl } from '@/lib/imageToUrl'
import settings from '@/settings'

export default function SEO() {
  const { locale } = useRouter()
  const { descriptions, og_image, theme_color, title } = settings

  const description = {
    en: descriptions[0].description,
    es: descriptions[1].description,
    pt: descriptions[2].description
  }

  return (
    <DefaultSeo
      titleTemplate={`%s | ${title}`}
      defaultTitle={title}
      description={description[locale]}
      openGraph={{
        locale,
        type: 'website',
        images: [
          {
            url: imageToUrl(`${og_image}?fit=cover&width=850&height=650`),
            width: 850,
            height: 650,
            alt: title
          }
        ]
      }}
      twitter={{
        site: '@site',
        cardType: 'summary_large_image'
      }}
      additionalLinkTags={[
        {
          rel: 'manifest',
          href: '/manifest.json'
        },
        {
          rel: 'sitemap',
          type: 'application/xml',
          href: '/sitemap.xml'
        },
        {
          rel: 'icon',
          href: '/icons/icon-32x32.png',
          type: 'image/png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '48x48',
          href: '/icons/icon-48x48.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '72x72',
          href: '/icons/icon-72x72.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '96x96',
          href: '/icons/icon-96x96.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '144x144',
          href: '/icons/icon-144x144.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '192x192',
          href: '/icons/icon-192x192.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '256x256',
          href: '/icons/icon-256x256.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '384x384',
          href: '/icons/icon-384x384.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '512x512',
          href: '/icons/icon-512x512.png'
        }
      ]}
      additionalMetaTags={[
        {
          name: 'theme-color',
          content: theme_color
        }
      ]}
    />
  )
}
