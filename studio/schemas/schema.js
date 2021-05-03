import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Español' },
  { id: 'pt', title: 'Português' }
]

const baseLanguage = supportedLanguages.find(l => l.isDefault)

const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'string'
  }))
}

const localeSlug = {
  title: 'Localized slug',
  name: 'localeSlug',
  type: 'object',
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'slug',
    options: {
      source: `title.${lang.id}`
    }
  }))
}

const localeText = {
  title: 'Localized text',
  name: 'localeText',
  type: 'object',
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'text'
  }))
}

const localeBlockText = {
  title: 'Localized block text',
  name: 'localeBlockText',
  type: 'object',
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [
      { type: 'block' },
      {
        type: 'image',
        fields: [
          {
            type: 'text',
            name: 'alt',
            title: 'Alternative text'
          }
        ]
      }
    ]
  }))
}

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    localeString,
    localeSlug,
    localeText,
    localeBlockText,
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'localeString'
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'localeSlug'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'localeText'
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: [{ type: 'team' }]
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime'
        },
        {
          name: 'coverImage',
          title: 'Cover Image',
          type: 'image'
        },
        {
          name: 'content',
          title: 'Content',
          type: 'localeBlockText'
        }
      ],
      preview: {
        select: {
          title: `title.${baseLanguage.id}`,
          media: 'coverImage'
        }
      }
    },

    {
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
  ])
})
