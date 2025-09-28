'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function BodyClassHandler() {
  const pathname = usePathname()

  useEffect(() => {
    // Remove any existing page-specific classes
    document.body.classList.remove('home-page', 'ebook-page')
    
    // Add class based on current route
    if (pathname === '/') {
      document.body.classList.add('home-page')
    } else if (pathname === '/ebook') {
      document.body.classList.add('ebook-page')
    }
  }, [pathname])

  return null
}
