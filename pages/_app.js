import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'

import { fathomId, fathomUrl, siteUrl } from '@/content/meta'
import { ThemeProvider } from '@/styles/themeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const { events } = useRouter()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    Fathom.load(fathomId, {
      url: fathomUrl,
      includedDomains: [siteUrl]
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
