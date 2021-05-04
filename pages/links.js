import Layout from '@/components/Layout'
import Links from '@/components/Links'

export default function LinksPage({ links }) {
  return (
    <Layout>
      <Links data={links} />
    </Layout>
  )
}

export async function getStaticProps() {
  const links = [
    {
      label: 'test',
      url: 'test'
    }
  ]

  return {
    props: { links }
  }
}
