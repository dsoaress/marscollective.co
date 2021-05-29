import { useState } from 'react'
import { useRouter } from 'next/router'
import { BiEnvelope, BiPhone } from 'react-icons/bi'
import cn from 'classnames'
import Fade from 'react-reveal/Fade'

import Button from '@/components/Button'
import { Input, TextArea } from '@/components/Inputs'
import Heading from '@/components/Heading'
import Social from '@/components/Social'
import locales from '@/locales'
import settings from '@/settings'

export default function Contact() {
  const { locale } = useRouter()
  const t = locales[locale].contact
  const [loading, setLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatusMessage('')

    const name = e.currentTarget.name.value
    const email = e.currentTarget.email.value
    const message = e.currentTarget.message.value

    const body = {
      name,
      email,
      message
    }

    const res = await fetch('/api/mailer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

    if (res.status === 200) {
      setStatusMessage(t.form.successMessage)
      e.target.reset()
    } else {
      setStatusMessage(t.form.errorMessage)
    }

    setLoading(false)
  }

  return (
    <Fade bottom cascade>
      <section className="container" id={t.id}>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:bg-gray lg:rounded-3xl lg:p-16">
          <div>
            <Heading>{t.title}</Heading>
            <div className="space-y-6 lg:space-y-4">
              <div className="flex space-x-6 lg:space-x-4">
                <BiEnvelope className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
                <a href={`mailto:${settings.email}`} className="text-body">
                  {settings.email}
                </a>
              </div>
              <div className="flex space-x-6 lg:space-x-4">
                <BiPhone className="w-6 h-6 lg:w-4 lg:h-4 lg:mt-1" />
                <span className="text-default">{settings.phone}</span>
              </div>
              <Social data={settings.social} />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="bg-secondary rounded-3xl p-6 space-y-4 lg:p-8">
              <Heading as="h3" className="text-white">
                {t.form.title}
              </Heading>
              <Input type="text" label={t.form.name} name="name" required />
              <Input type="email" label={t.form.email} name="email" required />
              <TextArea label={t.form.message} name="message" required />
              <div className="flex items-center text-white leading-5">
                <Button
                  type="submit"
                  loading={loading}
                  variant="white"
                  className="mr-4"
                >
                  {t.form.button}
                </Button>
                <span
                  className={cn('transition-opacity duration-1000 opacity-0', {
                    'opacity-100': statusMessage
                  })}
                >
                  {statusMessage}
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fade>
  )
}
