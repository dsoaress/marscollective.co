import { useRouter } from 'next/router'
import Link from 'next/link'

import Button from '@/components/Button'
import Welcome from '@/assets/Welcome'
import locales from '@/locales'

export default function Hero() {
  const { locale } = useRouter()
  const t = locales[locale].hero

  return (
    <section className="container">
      <div className="grid gap-12 justify-items-center items-center text-center lg:grid-cols-2">
        <div className="space-y-8">
          <h1>
            {t.title}
            <span className="text-primary">{t.bigger}</span>
          </h1>
          <p className="text-xl lg:text-2xl font-normal">{t.lead}</p>
          <div className="flex flex-wrap justify-center space-x-8">
            <Link href={t.buttonPrimary.url}>
              <a>
                <Button primary>{t.buttonPrimary.label}</Button>
              </a>
            </Link>
            <Link href={t.buttonSecondary.url}>
              <a>
                <Button>{t.buttonSecondary.label}</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-2/3 lg:w-full">
          <Welcome />
        </div>
      </div>
    </section>
  )
}
