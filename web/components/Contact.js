import { useRouter } from 'next/router'
import { BiEnvelope, BiPhone } from 'react-icons/bi'

import Button from '@/components/Button'
import { Input, TextArea } from '@/components/Inputs'
import Social from '@/components/Social'
import locales from '@/locales'
import meta from '@/content/meta'
import social from '@/content/social'

export default function Contact() {
  const { locale } = useRouter()
  const t = locales[locale].contact

  return (
    <section className="container" id={t.id}>
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:bg-gray lg:rounded-3xl lg:p-16">
        <div>
          <h2>{t.title}</h2>
          <div className="space-y-6 lg:space-y-4">
            <div className="flex space-x-6 lg:space-x-4">
              <BiEnvelope className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
              <a href={`mailto:${meta.email}`} className="text-body">
                {meta.email}
              </a>
            </div>
            <div className="flex space-x-6 lg:space-x-4">
              <BiPhone className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
              <span className="text-default">{meta.phone}</span>
            </div>
            <Social data={social} />
          </div>
        </div>
        <form>
          <div className="bg-secondary rounded-3xl p-6 space-y-4 lg:p-8">
            <h3 className="text-white">{t.form.title}</h3>
            <Input type="text" label={t.form.name} name="name" required />
            <Input type="email" label={t.form.email} name="email" required />
            <TextArea label={t.form.message} name="message" required />
            <div className="flex items-center space-x-4 text-white">
              <Button
                type="submit"
                style={{ borderColor: 'white', color: 'white' }}
              >
                {t.form.button}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
