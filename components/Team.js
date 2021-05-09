import { useRouter } from 'next/router'
import Fade from 'react-reveal/Fade'

import Avatar from '@/components/Avatar'
import Heading from '@/components/Heading'
import locales from '@/locales'

export default function Team({ data }) {
  const { locale } = useRouter()
  const t = locales[locale].team

  return (
    <Fade bottom cascade>
      <section className="container" id={t.id}>
        <Heading as="h2" className="text-center text-primary">
          {t.title}
        </Heading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {data.map(({ id, avatar, first_name, last_name, translations }) => (
            <div className="flex flex-col space-y-4 items-center" key={id}>
              <Avatar image={avatar} name={first_name + ' ' + last_name} />
              <div>
                <Heading as="h3" className="text-center text-primary">
                  {first_name + ' ' + last_name}
                </Heading>
                <p className="text-xl lg:text-2xl text-center">
                  {translations[0].position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fade>
  )
}
