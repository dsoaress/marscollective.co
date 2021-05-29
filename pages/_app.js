import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Seo from '@/components/Seo'
import settings from '@/settings'
import 'typeface-baloo-2'
import 'typeface-rubik'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const { site_url, tracker_id, tracker_url } = settings
  return (
    <ThemeProvider defaultTheme="system">
      <Head>
        <script
          async
          defer
          data-website-id={tracker_id}
          src={`https://${tracker_url}/umami.js`}
          data-domains={site_url}
        />
      </Head>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
