export default {
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
      title: `title.en`,
      media: 'coverImage'
    }
  }
}
