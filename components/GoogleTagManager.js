import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { pageview } from '@/lib/gtm'

export default function GoogleTagManager({ children }) {
  const { events } = useRouter()

  useEffect(() => {
    events.on('routeChangeComplete', pageview)
    return () => {
      events.off('routeChangeComplete', pageview)
    }
  }, [events])

  return children
}
