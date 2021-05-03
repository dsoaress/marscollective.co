import { useRouter } from 'next/router'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'

import Avatar from '@/components/Avatar'
import Social from '@/components/Social'
import { formatDate } from '@/lib/formatDate'
import { urlForImage } from '@/lib/sanity'

const PostItem = ({ data }) => {
  const { locale } = useRouter()

  return (
    <article className="container">
      <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <h1>{data.title[locale]}</h1>
          <div className="flex items-center space-x-2">
            {data.author.image && (
              <Avatar image={data.author.image} name={data.author.name} small />
            )}
            <div>
              <p className="lead">{data.author.name}</p>
              <span className="text-sm">{formatDate(data.date)[locale]}</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <Image
            src={urlForImage(data.coverImage).url()}
            layout="fill"
            className="h-96 rounded-3xl object-cover"
          />
        </div>
      </header>
      <BlockContent
        as="main"
        blocks={data.content[locale]}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className="post"
      />
      <footer>
        {data.author.bio && (
          <div className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 bg-gray rounded-3xl p-8 md:ml-20 md:mr-20 lg:ml-28 lg:mr-28">
            <Avatar
              image={data.author.image}
              alt={data.author.name}
              className="flex-1"
            />
            <div className="flex-1 space-y-4">
              <p className="text-xl lg:text-2xl font-normal">
                {data.author.name}
              </p>
              <p className="text-sm">{data.author.bio[locale]}</p>
              {data.author.social && <Social data={data.author.social} />}
            </div>
          </div>
        )}
      </footer>
    </article>
  )
}

export default PostItem
