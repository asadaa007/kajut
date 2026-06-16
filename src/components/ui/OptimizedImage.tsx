import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { resolveImageUrl, type ImageKey } from '@/lib/images'

interface OptimizedImageProps {
  imageKey: ImageKey
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  aspectRatio?: string
}

export function OptimizedImage({
  imageKey,
  alt,
  className,
  imgClassName,
  priority = false,
  aspectRatio,
}: OptimizedImageProps) {
  const [src, setSrc] = useState<string>('')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    resolveImageUrl(imageKey).then(setSrc)
  }, [imageKey])

  return (
    <div
      className={cn('relative overflow-hidden bg-linen', className)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse bg-linen"
          aria-hidden
        />
      )}
      {src && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-300',
            loaded ? 'opacity-100' : 'opacity-0',
            imgClassName,
          )}
        />
      )}
    </div>
  )
}
