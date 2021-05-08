import { useRouter } from 'next/router'
import { NextSeo, NewsArticleJsonLd } from 'next-seo'
import Image from 'next/image'
import readingTime from 'reading-time'

import Avatar from '@/components/Avatar'
import Social from '@/components/Social'
import { formatDate } from '@/lib/formatDate'
import { imageToUrl } from '@/lib/imageToUrl'
import locales from '@/locales'
import settings from '@/settings'

const PostItem = ({ data }) => {
  const { locale, locales: nextLocales } = useRouter()
  const t = locales[locale].blog
  const { author, date, date_updated, image, slug, tags, translations } = data
  const title = translations[0].title
  const authorName = author.first_name + ' ' + author.last_name
  const description = translations[0].description
  const body = translations[0].body
  const minRead = Math.round(readingTime(body).minutes)
  const fullUrlPath = `https://${settings.site_url}/${locale}/blog/${slug}`
  const fullUrlPathDefault = `https://${settings.site_url}/blog/${slug}`

  return (
    <article className="container">
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: fullUrlPath,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: date_updated,
            tags
          },
          images: [
            {
              url: imageToUrl(`${image}?fit=cover&width=850&height=650`),
              width: 850,
              height: 650,
              alt: title
            }
          ]
        }}
        languageAlternates={[
          {
            hrefLang: nextLocales[0],
            href: `https://${settings.site_url}/${nextLocales[0]}/blog/${slug}`
          },
          {
            hrefLang: nextLocales[1],
            href: `https://${settings.site_url}/${nextLocales[1]}/blog/${slug}`
          },
          {
            hrefLang: nextLocales[2],
            href: `https://${settings.site_url}/${nextLocales[2]}/blog/${slug}`
          },
          {
            hrefLang: 'x-default',
            href: fullUrlPathDefault
          }
        ]}
      />
      <NewsArticleJsonLd
        url={fullUrlPath}
        title={title}
        images={[imageToUrl(`${image}`)]}
        keywords={tags}
        datePublished={date}
        dateModified={date_updated}
        authorName={author.name}
        description={description}
        body={body}
      />
      <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8 lg:py-20">
          <h1>{title}</h1>
          <div className="flex items-center space-x-2">
            <Avatar image={author.avatar} name={authorName} small />
            <div>
              <p className="font-semibold">{authorName}</p>
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
        {author.translations.map(({ bio, languages_code }) => {
          if (languages_code === locale) {
            return (
              <div
                className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 bg-gray rounded-3xl p-8 md:ml-20 md:mr-20 lg:ml-28 lg:mr-28"
                key={languages_code}
              >
                <Avatar
                  image={author.avatar}
                  alt={authorName}
                  className="flex-1"
                />
                <div className="flex-1 space-y-4">
                  <p className="text-xl lg:text-2xl font-semibold">
                    {authorName}
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
