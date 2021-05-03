import BlogList from '@/components/BlogList'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Team from '@/components/Team'
import { getClient, overlayDrafts } from '@/lib/sanity.server'
import { indexBlogListQuery, indexTeamQuery } from '@/lib/queries'

export default function IndexPage({ blogList, team }) {
  return (
    <Layout>
      <Hero />
      <Services />
      <Team data={team} />
      <BlogList data={blogList} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const blogList = overlayDrafts(
    await getClient(preview).fetch(indexBlogListQuery)
  )
  const team = overlayDrafts(await getClient(preview).fetch(indexTeamQuery))

  return {
    props: { blogList, team }
  }
}
