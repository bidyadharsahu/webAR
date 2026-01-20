'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('webar-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('webar-cookie-consent', 'accepted')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-sm z-50"
        >
          <div className="bg-cream border border-dark/10 rounded-2xl p-5 shadow-lg">
            <p className="text-dark/70 text-[15px] leading-relaxed mb-4">
              We use cookies to make the experience better.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full transition-all duration-300 hover:bg-primary-dark"
              >
                Accept
              </button>
              <Link
                href="/privacy-policy"
                className="px-5 py-2.5 text-sm font-medium text-dark/60 hover:text-dark transition-colors duration-300"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
