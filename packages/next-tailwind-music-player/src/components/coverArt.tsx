import Image from 'next/image'

import { cn } from '../lib/cn'

type CoverArtProps = {
  src?: string
  className?: string
}
export default function CoverArt({ src, className }: CoverArtProps) {
  return src != null ? (
    <Image
      src={src}
      alt={''}
      height={300}
      width={300}
      className={cn('border-divider rounded overflow-hidden', className)}
    />
  ) : (
    <div className="w-[42px] h-[42px] bg-gray-300 rounded" />
  )
}
