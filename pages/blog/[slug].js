import { useRouter } from 'next/router'
import useSWR from 'swr'
import readingTime from 'reading-time'

import BlogItemAuthorBio from '@/components/BlogItemAuthorBio'
import BlogItemHeader from '@/components/BlogItemHeader'
import Layout from '@/components/Layout'
import SeoBlogItem from '@/components/SeoBlogItem'

import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { formatDate } from '@/lib/formatDate'
import { blogSlugsQuery, blogQuery } from '@/lib/queries'
import locales from '@/locales'
import settings from '@/settings'

export default function Post(props) {
  const { locale, query } = useRouter()
  const t = locales[locale].blog

  const { data: blog } = useSWR(blogQuery(locale, query.slug), fetcher, {
    initialData: props.blog
  })

  const {
    author,
    date,
    date_updated,
    image,
    slug,
    tags,
    translations
  } = blog.data[0]

  const { body, description, title } = translations[0]

  const authorName = `${author.first_name} ${author.last_name}`
  const minRead = Math.round(readingTime(body).minutes) + ' ' + t.minRead
  const url = `https://${settings.site_url}/${locale}/blog/${slug}`

  return (
    <Layout>
      <article className="container">
        <SeoBlogItem
          authorName={authorName}
          body={body}
          date={date}
          dateUpdated={date_updated}
          description={description}
          image={image}
          tags={tags}
          title={title}
          url={url}
        />

        <BlogItemHeader
          authorName={authorName}
          avatar={author.avatar}
          date={formatDate(date)[locale]}
          image={image}
          minRead={minRead}
          title={title}
        />

        <div
          className="prose lg:prose-lg xl:prose-xl max-w-screen-md my-16 mx-auto"
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <BlogItemAuthorBio author={author} locale={locale} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const { data: blog } = await api.get(blogSlugsQuery())

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...blog.data.map(blogItem => ({
        params: { slug: blogItem.slug },
        locale
      }))
    ],
    []
  )

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ locale, params }) {
  const { data: blog } = await api.get(blogQuery(locale, params.slug))

  return { props: { blog }, revalidate: 1 }
}
