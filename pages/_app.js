import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import SEO from '@/components/SEO'
import { ThemeProvider } from '@/styles/themeContext'
import settings from '@/settings'
import 'typeface-baloo-2'
import 'typeface-rubik'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const { events } = useRouter()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    Fathom.load(settings.fathom_id, {
      url: `https://${settings.fathom_url}/script.js`,
      includedDomains: [settings.site_url]
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }

    events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ThemeProvider>
      <SEO />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
