import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import blog from './blog'
import team from './team'
import links from './links'

const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'es', title: 'Español' },
  { id: 'pt', title: 'Português' }
]

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
    blog,
    team,
    links
  ])
})
