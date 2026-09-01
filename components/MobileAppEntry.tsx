'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function MobileAppEntry() {
  useEffect(() => {
    // Trigger GA4 event for mobile app entry view
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'mobile_app_entry_view', {
        event_category: 'Mobile',
        event_label: 'App Entry Page Load'
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 text-white text-center">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/Jayple.webp"
          alt="Jayple Logo"
          width={80}
          height={80}
          className="mx-auto rounded-2xl"
        />
      </div>

      <h1 className="font-display font-extrabold text-3xl mb-4 leading-tight">
        Book your salon appointment <span className="text-lime">instantly.</span>
      </h1>
      
      <p className="text-white/70 mb-10 text-base max-w-sm">
        Download the Jayple app to discover salons in Trichy, compare services, and skip the waiting queue.
      </p>

      <div className="w-full max-w-sm space-y-4">
        {/* Android */}
        <a
          href="https://play.google.com/store/apps/details?id=com.jayple.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'click_android_download', {
                event_category: 'Mobile',
                event_label: 'Android Download Click'
              })
            }
          }}
          className="flex items-center justify-center gap-3 w-full bg-lime text-navy font-bold py-4 px-6 rounded-xl shadow-lg transition-transform active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
          </svg>
          Get Android App
        </a>

        {/* iOS */}
        <a
          href="https://apps.apple.com/in/app/jayple/id6779542812"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
              (window as any).gtag('event', 'click_ios_download', {
                event_category: 'Mobile',
                event_label: 'iOS Download Click'
              })
            }
          }}
          className="flex items-center justify-center gap-3 w-full bg-white text-navy font-bold py-4 px-6 rounded-xl shadow-lg transition-transform active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 384 512" fill="currentColor">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
          </svg>
          Get iOS App
        </a>
      </div>
      
      <div className="mt-12 text-sm text-white/50">
        &copy; {new Date().getFullYear()} Jayple Private Limited.
      </div>
    </div>
  )
}
