import Image from 'next/image'

import { imageToUrl } from '@/lib/imageToUrl'

export default function Avatar({ image, name, small }) {
  return (
    <Image
      src={imageToUrl(image)}
      width={small ? 64 : 160}
      height={small ? 64 : 160}
      quality={95}
      className="rounded-full"
      alt={name}
    />
  )
}
