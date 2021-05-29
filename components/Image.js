import NextImage from 'next/image'

import { imageToUrl } from '@/lib/imageToUrl'

export default function Image({ src, ...rest }) {
  return <NextImage src={imageToUrl(src)} quality={95} {...rest} />
}
