'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  {
    label: 'Product',
    children: [
      { 
        label: 'Get Your Moment', 
        href: '/product/get-your-moment', 
        description: 'AR memories for customers',
        tag: 'B2C'
      },
      { 
        label: 'Partner With Restaurants', 
        href: '/product/partner-with-restaurants', 
        description: 'AR menus for restaurants',
        tag: 'B2B'
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Blog', href: '/resources/blog', description: 'Stories and insights' },
      { label: 'News & Media', href: '/resources/news', description: 'Press coverage' },
      { label: 'Videos', href: '/resources/videos', description: 'See WebAR in action' },
      { label: 'White Papers', href: '/resources/white-papers', description: 'Research & reports' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About', href: '/company/about', description: 'Our story' },
      { label: 'Join the Team', href: '/company/careers', description: 'Work with us' },
    ],
  },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)

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

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          isScrolled
            ? 'bg-cream/90 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center">
              <Image 
                src="/logo.svg" 
                alt="WebAR" 
                width={120} 
                height={36} 
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-5 py-2 text-[15px] font-medium transition-colors duration-300 rounded-full ${
                      activeDropdown === item.label
                        ? 'text-primary bg-primary/5'
                        : 'text-dark/70 hover:text-dark'
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 pt-2"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-dark/5 p-2 min-w-[280px]">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-start gap-3 p-4 rounded-xl hover:bg-cream transition-colors duration-200 group"
                            >
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-dark group-hover:text-primary transition-colors">
                                    {child.label}
                                  </span>
                                  {'tag' in child && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                                      {child.tag}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-dark/50 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                              <svg
                                className="w-5 h-5 text-dark/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 mt-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/try-now" className="btn-primary">
                Try Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-10 p-2 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-6 h-0.5 bg-dark transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-cream" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative h-full pt-24 pb-8 px-6 overflow-y-auto"
            >
              <div className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <h3 className="label mb-4">{item.label}</h3>
                    <div className="space-y-2">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between p-4 bg-white rounded-2xl hover:shadow-md transition-all duration-300"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-dark">
                                {child.label}
                              </span>
                              {'tag' in child && (
                                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                                  {child.tag}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-dark/50 mt-1">
                              {child.description}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-dark/30"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    href="/try-now"
                    className="btn-primary w-full justify-center text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Try Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
