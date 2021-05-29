import { NextSeo, NewsArticleJsonLd } from 'next-seo'

import { imageToUrl } from '@/lib/imageToUrl'

export default function SeoBlogItem({
  authorName,
  body,
  date,
  dateUpdated,
  description,
  image,
  tags,
  title,
  url
}) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          type: 'article',
          article: {
            publishedTime: date,
            modifiedTime: dateUpdated,
            tags
          },
          images: [
            {
              url: imageToUrl(`${image}?fit=cover&width=850&height=650`),
              width: 850,
              height: 650,
              alt: title
            }
          ]
        }}
      />
      <NewsArticleJsonLd
        url={url}
        title={title}
        images={[imageToUrl(image)]}
        keywords={tags}
        datePublished={date}
        dateModified={dateUpdated}
        authorName={authorName}
        description={description}
        body={body}
      />
    </>
  )
}
