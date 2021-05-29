import Image from '@/components/Image'
import Social from '@/components/Social'

export default function BlogItemAuthorBio({ author, locale }) {
  const localized = author.translations.filter(
    localized => localized.languages_code === locale
  )
  const authorName = `${author.first_name} ${author.last_name}`
  const { bio } = localized[0]

  return (
    <div className="max-w-screen-md mx-auto">
      <div className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 bg-gray rounded-3xl p-8">
        <Image
          src={author.avatar}
          alt={authorName}
          width={160}
          height={160}
          className="rounded-full flex-1"
        />
        <div className="flex-1 space-y-4">
          <p className="text-xl lg:text-2xl font-semibold">{authorName}</p>
          <p className="text-sm">{bio}</p>
          {author.social && <Social data={author.social} />}
        </div>
      </div>
    </div>
  )
}
