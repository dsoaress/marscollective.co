import GoogleTagManager from '@/components/GoogleTagManager'
import { ThemeProvider } from '@/styles/themeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleTagManager>
  )
}
