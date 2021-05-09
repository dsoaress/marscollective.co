import { ThemeProvider } from 'next-themes'
import PlausibleProvider from 'next-plausible'

import SEO from '@/components/SEO'
import settings from '@/settings'
import 'typeface-baloo-2'
import 'typeface-rubik'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system">
      <PlausibleProvider
        domain={settings.site_url}
        customDomain={`https://stats.${settings.site_url}`}
        trackOutboundLinks={true}
      >
        <SEO />
        <Component {...pageProps} />
      </PlausibleProvider>
    </ThemeProvider>
  )
}
