export default {
  name: 'links',
  type: 'document',
  title: 'Links',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      hidden: true,
      type: 'string'
    },
    {
      name: 'links',
      title: 'Items',
      type: 'array',
      of: [
        {
          title: 'Links',
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string'
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
