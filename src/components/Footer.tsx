'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  product: [
    { label: 'Live Demo', href: '/try-now' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/#experiences' },
  ],
  company: [
    { label: 'Careers', href: '/company/careers' },
    { label: 'Contact', href: '/company/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/privacy-policy' },
  ],
}

const socialLinks = [
  { 
    name: 'Twitter', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
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

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-sand via-sand to-cream-dark overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-cream via-primary/20 to-cream" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Logo />
              </motion.div>
            </Link>
            <p className="text-dark/60 text-[15px] mb-4 max-w-xs">
              Web-based augmented reality experiences that work instantly. No apps, no barriers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a 
                href="mailto:namasterides@gmail.com" 
                className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                namasterides@gmail.com
              </a>
              <p className="flex items-center gap-2 text-dark/60 text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Tampa, Florida
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-dark/50 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-dark/50 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-dark mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-dark/50 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h4 className="font-semibold text-dark mb-1">Stay Updated</h4>
              <p className="text-dark/50 text-sm">Get the latest AR trends and updates.</p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2.5 bg-white/80 border border-primary/10 rounded-full text-sm focus:outline-none focus:border-primary/30 transition-colors w-64"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-dark/40 text-sm">
              © {new Date().getFullYear()} webAR. All rights reserved.
            </p>
            <p className="text-dark/40 text-sm">
              Tampa, Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
