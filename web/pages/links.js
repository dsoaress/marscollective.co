import Layout from '@/components/Layout'
import Links from '@/components/Links'
import { getClient } from '@/lib/sanity.server'
import { linksQuery } from '@/lib/queries'

export default function LinksPage({ links }) {
  return (
    <Layout>
      <Links data={links} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const { links } = await getClient(preview).fetch(linksQuery)

  return {
    props: { links }
  }
}
