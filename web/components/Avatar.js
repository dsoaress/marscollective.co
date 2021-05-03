import Image from 'next/image'

import { urlForImage } from '@/lib/sanity'

export default function Avatar({ image, name, small }) {
  return (
    <Image
      src={urlForImage(image).height(640).width(640).fit('crop').url()}
      width={small ? 56 : 160}
      height={small ? 56 : 160}
      quality={95}
      className={`rounded-full ${small ? 'w-14 h-14' : 'w-40 h-40'}`}
      alt={name}
    />
  )
}
