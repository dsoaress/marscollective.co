import BlogList from '@/components/BlogList'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import Team from '@/components/Team'

export default function IndexPage({ blogList, team }) {
  return (
    <Layout>
      <Hero />
      <Services />
      {/* <Team data={team} /> */}
      {/* <BlogList data={blogList} /> */}
      <Contact />
    </Layout>
  )
}
