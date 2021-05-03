import { useRouter } from 'next/router'

import WeDesign from '@/assets/WeDesign'
import WeDevelop from '@/assets/WeDevelop'
import WeLocalize from '@/assets/WeLocalize'
import WeWrite from '@/assets/WeWrite'
import locales from '@/locales'

export default function Services() {
  const { locale } = useRouter()
  const t = locales[locale]
  const { title, design, develop, write, localize } = t.services

  const services = [
    {
      icon: <WeDesign />,
      title: design.title,
      content: design.content
    },
    {
      icon: <WeDevelop />,
      title: develop.title,
      content: develop.content
    },
    {
      icon: <WeWrite />,
      title: write.title,
      content: write.content
    },
    {
      icon: <WeLocalize />,
      title: localize.title,
      content: localize.content
    }
  ]

  return (
    <section className="container">
      <h2 className="text-center text-primary">{title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {services.map(({ icon, title, content }, i) => (
          <div className="flex flex-col space-y-4 items-center" key={i}>
            <div className="w-40 h-40">{icon}</div>
            <div>
              <h3 className="text-center text-primary">{title}</h3>
              <p>{content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
