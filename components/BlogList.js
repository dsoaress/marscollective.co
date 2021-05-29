import { useRouter } from 'next/router'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import Heading from '@/components/Heading'
import Image from '@/components/Image'
import { formatDate } from '@/lib/formatDate'
import locales from '@/locales'

export default function BlogList({ data }) {
  const { locale } = useRouter()
  const t = locales[locale].blog

  return (
    <Fade bottom cascade>
      <section className="container" id={t.id}>
        <Heading as="h2" className="text-center text-primary">
          {t.title}
        </Heading>
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:gap-10">
          {data.map(({ id, date, image, slug, translations }) => {
            return (
              <Link href={`/blog/${slug}`} key={id}>
                <a>
                  <div className="relative h-96 rounded-3xl overflow-hidden">
                    <Image
                      src={image}
                      alt={translations[0].title}
                      layout="fill"
                      className="object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 bg-gradient-to-t from-black z-20 group">
                      <div className="absolute p-8 bottom-0 w-full">
                        <Heading
                          as="h3"
                          className="text-white group-hover:text-primary transition-colors mb-4"
                        >
                          {translations[0].title}
                        </Heading>
                        <p className="text-white">{formatDate(date)[locale]}</p>
                        <p className="text-white mt-2 line-clamp-2">
                          {translations[0].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </section>
    </Fade>
  )
}
