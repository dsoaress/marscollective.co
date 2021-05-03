import { useRouter } from 'next/router'

import Avatar from '@/components/Avatar'
import locales from '@/locales'

export default function Team({ data }) {
  const { locale } = useRouter()
  const t = locales[locale].team

  return (
    <section className="container" id={t.id}>
      <h2 className="text-center text-primary">{t.title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {data.map(({ _id, image, name, position }) => (
          <div className="flex flex-col space-y-4 items-center" key={_id}>
            <Avatar image={image} name={name} />
            <div>
              <h3 className="text-center text-primary">{name}</h3>
              <p className="text-xl lg:text-2xl text-center">
                {position[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
