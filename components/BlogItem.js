import { useRouter } from 'next/router'
import Image from 'next/image'
import readingTime from 'reading-time'

import Avatar from '@/components/Avatar'
import Social from '@/components/Social'
import { formatDate } from '@/lib/formatDate'
import { imageToUrl } from '@/lib/imageToUrl'
import locales from '@/locales'

const PostItem = ({ data }) => {
  const { locale } = useRouter()
  const t = locales[locale].blog
  const { author, date, image, translations } = data
  const title = translations[0].title
  const body = translations[0].body
  const minRead = Math.round(readingTime(body).minutes)

  return (
    <article className="container">
      <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8 lg:py-20">
          <h1>{title}</h1>
          <div className="flex items-center space-x-2">
            <Avatar image={author.image} name={author.name} small />
            <div>
              <p className="font-semibold">{author.name}</p>
              <p className="text-sm">{formatDate(date)[locale]}</p>
              <p className="text-sm">{minRead + ' ' + t.minRead}</p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={imageToUrl(image)}
            layout="fill"
            className="h-96 rounded-3xl object-cover"
          />
        </div>
      </header>
      <div className="post" dangerouslySetInnerHTML={{ __html: body }} />
      <footer>
        {author.translations.map(({ bio, code }) => {
          if (code === locale) {
            return (
              <div
                className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 bg-gray rounded-3xl p-8 md:ml-20 md:mr-20 lg:ml-28 lg:mr-28"
                key={code}
              >
                <Avatar
                  image={author.image}
                  alt={author.name}
                  className="flex-1"
                />
                <div className="flex-1 space-y-4">
                  <p className="text-xl lg:text-2xl font-semibold">
                    {author.name}
                  </p>
                  <p className="text-sm">{bio}</p>
                  {author.social && <Social data={author.social} />}
                </div>
              </div>
            )
          }
        })}
      </footer>
    </article>
  )
}

export default PostItem
