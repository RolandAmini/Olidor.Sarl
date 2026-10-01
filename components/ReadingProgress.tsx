'use client'

import { useEffect, useRef } from 'react'

export default function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      const progress = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0
      if (barRef.current) {
        barRef.current.style.height = `${Math.min(100, Math.max(0, progress))}%`
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 h-40 w-[3px] rounded-full bg-blue-600 hidden sm:block"
    >
      <div
        ref={barRef}
        className="absolute bottom-0 left-0 w-full rounded-full bg-green-700 transition-[height] duration-75 ease-out"
        style={{ height: '0%' }}
      />
    </div>
  )
}