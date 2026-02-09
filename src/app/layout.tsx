import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Chatbot from '@/components/Chatbot'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Base URL for canonical and OG tags
const siteUrl = 'https://netrikxr.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  // Primary Meta Tags
  title: {
    default: 'Netrik XR - Augmented Reality Solutions | AR Photo Frames, Business Cards & Menus',
    template: '%s | Netrik XR - AR Solutions'
  },
  description: 'Netrik XR is the leading augmented reality company offering AR photo frames, AR business cards, AR restaurant menus, and web development. Transform your business with no-app-required AR experiences. Scan & experience the future today!',
  
  // Comprehensive Keywords for SEO
  keywords: [
    'Netrik', 'Netrik XR', 'NetrikXR', 'netrikxr.com',
    'augmented reality', 'AR solutions', 'AR company',
    'AR photo frames', 'augmented reality photo frames', 'interactive photo frames',
    'AR business cards', 'augmented reality business cards', 'digital business cards',
    'AR restaurant menu', 'augmented reality menu', 'interactive restaurant menu', 'QR menu',
    'AR real estate', 'augmented reality real estate', 'property AR',
    'web AR', 'WebAR', 'no app AR', 'browser AR',
    'AR development', 'AR services', 'AR technology',
    'QR code experience', 'scan to view AR', 'marker-based AR',
    '3D modeling services', 'AR for business', 'enterprise AR',
    'India AR company', 'AR solutions provider'
  ],
  
  // Authors and Creator
  authors: [{ name: 'Netrik XR', url: siteUrl }],
  creator: 'Netrik XR',
  publisher: 'Netrik XR',
  
  // Favicon and Icons
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Application Name
  applicationName: 'Netrik XR',
  
  // Generator
  generator: 'Next.js',
  
  // Referrer Policy
  referrer: 'origin-when-cross-origin',
  
  // Category
  category: 'technology',
  
  // Classification
  classification: 'Augmented Reality, Technology, Business Solutions',
  
  // Open Graph - Enhanced for Social Sharing
  openGraph: {
    title: 'Netrik XR - Augmented Reality Solutions | AR Photo Frames & Business Cards',
    description: 'Transform your business with Netrik XR augmented reality solutions. AR photo frames, business cards, restaurant menus & more. No app required - just scan and experience!',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Netrik XR',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Netrik XR - Augmented Reality Solutions',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card - Enhanced
  twitter: {
    card: 'summary_large_image',
    title: 'Netrik XR - Augmented Reality Solutions',
    description: 'Transform your business with AR photo frames, business cards & menus. No app required!',
    site: '@netrikxr',
    creator: '@netrikxr',
    images: [`${siteUrl}/twitter-image`],
  },
  
  // Robots - Search Engine Directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  
  // Verification - Add your verification codes here
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  
  // Other important meta
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Netrik XR',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'format-detection': 'telephone=no',
  },
}

// JSON-LD Structured Data for Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Netrik XR',
  alternateName: ['NetrikXR', 'Netrik', 'Netrik AR'],
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/logo.svg`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  description: 'Netrik XR is a leading augmented reality company providing AR photo frames, AR business cards, AR restaurant menus, and web development services.',
  foundingDate: '2024',
  sameAs: [
    'https://twitter.com/netrikxr',
    'https://linkedin.com/company/netrikxr',
    'https://instagram.com/netrikxr',
    'https://facebook.com/netrikxr',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-656-214-5190',
    contactType: 'customer service',
    email: 'namasterides@gmail.com',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
}

// JSON-LD for Website with SearchAction
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Netrik XR',
  alternateName: 'NetrikXR',
  url: siteUrl,
  description: 'Augmented Reality Solutions - AR Photo Frames, Business Cards & Restaurant Menus',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
}

// JSON-LD for Services
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': `${siteUrl}/#services`,
  name: 'Netrik XR Services',
  description: 'Augmented Reality and Web Development Services',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'AR Photo Frames',
      description: 'Transform printed photos into interactive AR experiences. Scan to play videos, messages, or animations.',
      url: `${siteUrl}/services/ar-photo-frames`,
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: 'Augmented Reality',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'AR Business Cards',
      description: 'Interactive business cards with AR technology. Share portfolios, videos, and contact info instantly.',
      url: `${siteUrl}/services/ar-business-cards`,
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: 'Augmented Reality',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'AR Restaurant Menus',
      description: 'QR-based AR menus showing 3D food visualization, nutritional info, and easy ordering.',
      url: `${siteUrl}/services/restaurant-menu`,
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: 'Augmented Reality',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'AR Real Estate',
      description: 'Virtual property tours and AR visualization for real estate businesses.',
      url: `${siteUrl}/services/real-estate-ar`,
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: 'Augmented Reality',
    },
    {
      '@type': 'Service',
      position: 5,
      name: '3D Modeling',
      description: 'Professional 3D modeling services for AR experiences and visualization.',
      url: `${siteUrl}/services/3d-modeling`,
      provider: { '@id': `${siteUrl}/#organization` },
      serviceType: '3D Modeling',
    },
  ],
}

// JSON-LD for Local Business (helps with local SEO)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'Netrik XR',
  image: `${siteUrl}/logo.svg`,
  url: siteUrl,
  telephone: '+1-656-214-5190',
  email: 'namasterides@gmail.com',
  priceRange: '$$',
  description: 'Leading augmented reality solutions provider offering AR photo frames, business cards, restaurant menus, and web development.',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://twitter.com/netrikxr',
    'https://linkedin.com/company/netrikxr',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
          strategy="afterInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Chatbot />
      </body>
    </html>
  )
}
