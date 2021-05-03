import BlogItem from '@/components/BlogItem'
import Layout from '@/components/Layout'
import { blogItemQuery, blogSlugsQuery } from '@/lib/queries'
import { sanityClient, getClient } from '@/lib/sanity.server'

export default function Post({ blogItem }) {
  return (
    <Layout>
      <BlogItem data={blogItem} />
    </Layout>
  )
}

export async function getStaticPaths({ locales }) {
  const blog = await sanityClient.fetch(blogSlugsQuery)

  const paths = locales.reduce(
    (acc, next) => [
      ...acc,
      ...blog.map(data => {
        const slug = data.slug[next].current

        return {
          params: { slug },
          locale: next
        }
      })
    ],
    []
  )

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params, locale, preview = false }) {
  const blogItem = await getClient(preview).fetch(blogItemQuery, {
    slug: params.slug,
    locale
  })

  return { props: { blogItem } }
}
