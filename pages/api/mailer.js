import formData from 'form-data'
import Mailgun from 'mailgun.js'
import AbortController from 'node-abort-controller'

import meta from '@/content/meta'

global.AbortController = AbortController

export default async function handler(req, res) {
  const mailgun = new Mailgun(formData)
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    public_key: process.env.MAILGUN_PUBLIC_KEY
  })

  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(500).json({ error: 'Missing body parameters' })
    }

    try {
      const msg = await mg.messages.create(meta.sandbox, {
        from: `${name} <${email}>`,
        to: [meta.email],
        subject: 'Contato via MarsCollective.co',
        text: message
      })
      res.status(200).json({ msg })
    } catch (err) {
      res.status(err.status).json({ error: err })
    }
  } else {
    res.status(401).json({ error: 'Forbidden' })
  }
}
