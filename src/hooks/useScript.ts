import { useEffect, useRef, useState } from 'react'

type UseScript = (url: string) => { isLoaded: boolean }

/**
 * Loads HTML script asynchronously with hook instead of putting it inside <script> tag in HTML
 */
export const useScript: UseScript = (url: string) => {
  const scriptRef = useRef(document.createElement('script'))
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const script = scriptRef.current

    script.onload = () => {
      setIsLoaded(true)
    }
    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
      setIsLoaded(false)
    }
  }, [url])

  return { isLoaded }
}
