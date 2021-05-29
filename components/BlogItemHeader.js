import Heading from '@/components/Heading'
import Image from '@/components/Image'

export default function BlogItemHeader({
  authorName,
  avatar,
  date,
  image,
  minRead,
  title
}) {
  return (
    <header className="grid gap-8 lg:grid-cols-2 lg:items-center">
      <div className="space-y-8 lg:py-20">
        <Heading as="h1">{title}</Heading>
        <div className="flex items-center space-x-2">
          <Image
            src={avatar}
            alt={authorName}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{authorName}</p>
            <p className="text-sm">{date}</p>
            <p className="text-sm">{minRead}</p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-96 lg:h-full">
        <Image src={image} layout="fill" className="rounded-3xl object-cover" />
      </div>
    </header>
  )
}
