import { useRouter } from 'next/router'
import useSWR from 'swr'

import BlogList from '@/components/BlogList'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Team from '@/components/Team'
import { api } from '@/lib/api'
import { fetcher } from '@/lib/fetcher'
import { indexBlogQuery, teamQuery } from '@/lib/queries'

export default function IndexPage(props) {
  const { locale } = useRouter()

  const { data: blog } = useSWR(indexBlogQuery(locale), fetcher, {
    initialData: props.blog
  })

  const { data: team } = useSWR(teamQuery(locale), fetcher, {
    initialData: props.team
  })

  return (
    <Layout>
      <Hero />
      <Services />
      <Team data={team.data} />
      <BlogList data={blog.data} />
      <Contact />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const { data: blog } = await api.get(indexBlogQuery(locale))
  const { data: team } = await api.get(teamQuery(locale))

  return { props: { blog, team }, revalidate: 1 }
}
