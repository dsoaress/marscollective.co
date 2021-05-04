import { useRouter } from 'next/router'
import useSWR from 'swr'

import BlogItem from '@/components/BlogItem'
import Layout from '@/components/Layout'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { blogSlugsQuery, blogQuery } from '@/lib/queries'

export default function Post(props) {
  const { locale, query } = useRouter()

  const { data: blog } = useSWR(blogQuery(locale, query.slug), fetcher, {
    initialData: props.blog
  })

  return (
    <Layout>
      <BlogItem data={blog.data[0]} />
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
