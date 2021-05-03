export default {
  name: 'team',
  type: 'document',
  title: 'Team',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'position',
      title: 'Position',
      type: 'localeString'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'localeText'
    },
    {
      name: 'social',
      title: 'Social network',
      type: 'array',
      of: [
        {
          title: 'Social network',
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              options: {
                list: [
                  { title: 'Behance', value: 'Behance' },
                  { title: 'Dribbble', value: 'Dribbble' },
                  { title: 'Email', value: 'Email' },
                  { title: 'Facebook', value: 'Facebook' },
                  { title: 'Github', value: 'Github' },
                  { title: 'Instagram', value: 'Instagram' },
                  { title: 'Medium', value: 'Medium' },
                  { title: 'Messenger', value: 'Messenger' },
                  { title: 'Site', value: 'Site' },
                  { title: 'Telegram', value: 'Telegram' },
                  { title: 'Twitter', value: 'Twitter' },
                  { title: 'WhatsApp', value: 'WhatsApp' }
                ]
              }
            },
            {
              title: 'URL',
              name: 'url',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
