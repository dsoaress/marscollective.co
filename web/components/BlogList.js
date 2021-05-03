import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/formatDate'
import { urlForImage } from '@/lib/sanity'
import locales from '@/locales'

export default function BlogList({ data }) {
  const { locale } = useRouter()
  const t = locales[locale].blog

  return (
    <section className="container">
      <h2 className="text-center text-primary">{t.title}</h2>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {data.map(({ _id, coverImage, date, slug, title }) => {
          return (
            <Link href={`/blog/${slug[locale].current}`} key={_id}>
              <a>
                <div className="relative h-96 rounded-3xl overflow-hidden">
                  <Image
                    src={urlForImage(coverImage).url()}
                    alt={title[locale]}
                    layout="fill"
                    className="object-cover z-0"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 bg-gradient-to-t from-black z-20">
                    <div className="absolute p-8 bottom-0 w-full">
                      <h3 className="text-white hover:text-primary transition-colors mb-4">
                        {title[locale]}
                      </h3>
                      <span className="text-white">
                        {formatDate(date)[locale]}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
