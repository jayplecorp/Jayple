'use client'

import { useEffect, useState } from 'react'
import MobileAppEntry from './MobileAppEntry'

export default function MobileAppEntryWrapper() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || ''
    const isMobileDevice = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    
    setIsMobile(isMobileDevice)
    
    if (isMobileDevice) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  if (!isMobile) return null

  return (
    <div className="fixed inset-0 z-[99999] bg-navy overflow-y-auto">
      <MobileAppEntry />
    </div>
  )
}
