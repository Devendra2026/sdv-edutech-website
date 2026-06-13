'use client'

import { useEffect, useState } from 'react'

export function useHeaderScrolled() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrolled
}

export function HeaderScrollWrapper({ children }: { children: (scrolled: boolean) => React.ReactNode }) {
  const scrolled = useHeaderScrolled()
  return <>{children(scrolled)}</>
}
