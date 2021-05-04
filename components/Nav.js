import { useRouter } from 'next/router'
import Link from 'next/link'

import locales from '@/locales'

export default function Nav() {
  const { locale, locales: nextLocales, pathname } = useRouter()
  const t = locales[locale]

  return (
    <ul className="bg-reverse p-6 space-y-8 font-semibold md:space-y-12 md:py-20 lg:bg-transparent lg:p-0 lg:space-y-0 lg:space-x-8  lg:flex">
      {t.nav.map(({ label, url }, i) => (
        <li className="md:text-center" key={i}>
          <Link href={url} alt={label}>
            <a
              className={`${
                pathname === url ? 'text-primary' : 'text-body'
              } hover:text-primary`}
            >
              {label}
            </a>
          </Link>
        </li>
      ))}
      <li>
        <ul className="flex space-x-4 md:justify-center md:space-x-6 lg:space-x-4">
          {nextLocales.map((localeItem, i) => (
            <li key={i}>
              <Link
                href={pathname === '/blog/[slug]' ? '/' : pathname}
                locale={localeItem}
              >
                <a
                  className={`${
                    locale === localeItem ? 'text-primary' : 'text-body'
                  } hover:text-primary`}
                >
                  [{localeItem}]
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}
