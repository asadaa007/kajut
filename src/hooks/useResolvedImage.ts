import { useEffect, useState } from 'react'
import { resolveImageUrl, type ImageKey } from '@/lib/images'

export function useResolvedImage(key: ImageKey) {
  const [src, setSrc] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    resolveImageUrl(key).then((url) => {
      if (active) {
        setSrc(url)
        setLoading(false)
      }
    })
    return () => {
      active = false
    }
  }, [key])

  return { src, loading }
}
