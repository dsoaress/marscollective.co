import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
