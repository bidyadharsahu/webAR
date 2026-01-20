'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Live Demo', href: '/try-now' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'Contact', href: '/company/about' },
]

// Logo Component - matches the webAR brand logo
function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {/* Logo Icon - Green bracket with play button */}
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        {/* Left bracket */}
        <path 
          d="M8 8L4 12V28L8 32" 
          stroke="#2D5A3D" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right bracket */}
        <path 
          d="M32 8L36 12V28L32 32" 
          stroke="#2D5A3D" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* Play triangle */}
        <path 
          d="M16 13L28 20L16 27V13Z" 
          fill="#2D5A3D"
        />
      </svg>
      {/* Logo Text */}
      <span className="text-xl font-bold tracking-tight text-dark">
        web<span className="text-primary">AR</span>
      </span>
    </div>
  )
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gradient-to-r from-cream via-sand-light/95 to-cream backdrop-blur-md shadow-sm shadow-primary/5'
            : 'bg-gradient-to-b from-cream/80 to-transparent'
        }`}
      >
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Logo />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-[15px] text-dark/60 hover:text-dark transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Try Demo Button */}
            <div className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/try-now"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
                >
                  Try demo
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7 : 0 }}
                  className="block h-0.5 w-full bg-dark origin-center"
                />
                <motion.span
                  animate={{ opacity: mobileMenuOpen ? 0 : 1, scaleX: mobileMenuOpen ? 0 : 1 }}
                  className="block h-0.5 w-full bg-dark"
                />
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
                  className="block h-0.5 w-full bg-dark origin-center"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-cream via-sand-light to-cream md:hidden"
          >
            <div className="container-custom pt-24 pb-8">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 text-2xl font-medium text-dark border-b border-primary/10 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                  className="pt-6"
                >
                  <Link
                    href="/try-now"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Try demo
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
