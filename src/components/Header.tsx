'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Experiences', href: '/#experiences' },
  { label: 'Live Demo', href: '/try-now' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Careers', href: '/company/careers' },
  { label: 'Contact', href: '/company/about' },
]

// Logo Component - Netrik XR brand logo
function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/netrik-xr-logo.png"
        alt="Netrik XR - Augmented Reality Company"
        width={280}
        height={75}
        className="h-[52px] w-auto object-contain"
        priority
      />
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-primary text-white overflow-visible ${
          isScrolled
            ? 'shadow-lg shadow-black/10'
            : ''
        }`}
      >
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
        
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center">
              <Image
                src="/netrik-xr-logo.png"
                alt="Netrik XR - Augmented Reality Company"
                width={500}
                height={140}
                className="h-[130px] w-auto object-contain"
                priority
              />
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
                    className="relative text-[15px] text-white/80 hover:text-white transition-colors duration-300 group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
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
                <a
                  href="https://webar-lovat.vercel.app/"
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-primary text-[15px] font-medium rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-lg hover:shadow-black/10"
                >
                  Try demo
                </a>
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
                  className={`block h-0.5 w-full origin-center ${mobileMenuOpen ? 'bg-dark' : 'bg-white'}`}
                />
                <motion.span
                  animate={{ opacity: mobileMenuOpen ? 0 : 1, scaleX: mobileMenuOpen ? 0 : 1 }}
                  className={`block h-0.5 w-full ${mobileMenuOpen ? 'bg-dark' : 'bg-white'}`}
                />
                <motion.span
                  animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7 : 0 }}
                  className={`block h-0.5 w-full origin-center ${mobileMenuOpen ? 'bg-dark' : 'bg-white'}`}
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
                  <a
                    href="https://webar-lovat.vercel.app/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="btn-primary w-full justify-center"
                  >
                    Try demo
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
