import { useRouter } from 'next/router'
import useSWR from 'swr'

import { api } from '@/lib/api'
import { linksQuery } from '@/lib/queries'
import { fetcher } from '@/lib/fetcher'

import Layout from '@/components/Layout'
import Links from '@/components/Links'

export default function LinksPage(props) {
  const { locale } = useRouter()

  const { data: links } = useSWR(linksQuery(locale), fetcher, {
    initialData: props.links
  })

  return (
    <Layout>
      <Links data={links.data} />
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  const { data: links } = await api.get(linksQuery(locale))

  return { props: { links }, revalidate: 1 }
}
