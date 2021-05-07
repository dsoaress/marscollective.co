import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import settings from '@/settings'

export default function Meta() {
  const { locale } = useRouter()

  return (
    <Head>
      <title>{settings.title}</title>
      <meta property="og:title" content={settings.title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={settings.title} />
      <meta name="theme-color" content={settings.theme_color} />

      {settings.descriptions.map(({ languages_code, description }) => {
        if (languages_code === locale) {
          return (
            <Fragment key={locale}>
              <meta name="description" content={description} />
              <meta property="og:description" content={description} />
              <meta name="twitter:description" content={description} />
            </Fragment>
          )
        }
      })}

      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/icons/icon-32x32.png" type="image/png" />
      <link rel="apple-touch-icon" sizes="48x48" href="/icons/icon-48x48.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/icons/icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="96x96" href="/icons/icon-96x96.png" />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/icons/icon-512x512.png"
      />
    </Head>
  )
}
