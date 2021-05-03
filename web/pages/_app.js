import GoogleTagManager from '@/components/GoogleTagManager'
import { ThemeProvider } from '@/theme/themeContext'
import '@/theme/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </GoogleTagManager>
  )
}
