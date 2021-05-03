import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Links')
        .child(S.document().schemaType('links').documentId('links')),
      ...S.documentTypeListItems().filter(
        listItem => !['links'].includes(listItem.getId())
      )
    ])
