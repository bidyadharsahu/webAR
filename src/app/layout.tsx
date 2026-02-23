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
  // Primary Meta Tags - BRAND FOCUSED for "netrikxr" searches
  title: {
    default: 'Netrik XR | #1 Augmented Reality Company - AR Photo Frames, Business Cards & Menus',
    template: '%s | Netrik XR - Leading AR Solutions Provider'
  },
  description: 'Netrik XR (netrikxr.com) is the #1 augmented reality company. We create AR photo frames, AR business cards, AR restaurant menus & web development. No app required - just scan! Transform your business with Netrik XR today.',
  
  // Comprehensive Keywords for SEO - BRAND VARIATIONS FIRST
  keywords: [
    // Brand name variations (most important for brand searches)
    'Netrik XR', 'NetrikXR', 'netrikxr', 'Netrik', 'netrik xr', 'NETRIK XR',
    'netrikxr.com', 'www.netrikxr.com', 'netrik xr company', 'netrikxr ar',
    // Core services
    'augmented reality company', 'AR solutions', 'AR company', 'best AR company',
    'AR photo frames', 'augmented reality photo frames', 'interactive photo frames',
    'AR business cards', 'augmented reality business cards', 'digital business cards AR',
    'AR restaurant menu', 'augmented reality menu', 'interactive restaurant menu', '3D food menu',
    'AR real estate', 'augmented reality real estate', 'property visualization AR',
    // Technology terms
    'web AR', 'WebAR', 'no app AR', 'browser AR', 'scan and view AR',
    'AR development', 'AR services', 'AR technology', 'marker-based AR', 'markerless AR',
    'QR code AR experience', '3D modeling services', 'AR for business',
    // Location/intent
    'AR solutions provider', 'hire AR company', 'AR development services',
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
  
  // Open Graph - Enhanced for Social Sharing & Brand Recognition
  openGraph: {
    title: 'Netrik XR | #1 Augmented Reality Company - Transform Your Business',
    description: 'Netrik XR (netrikxr.com) creates stunning AR experiences. AR photo frames, business cards, restaurant menus & more. No app required - scan and experience the future with Netrik XR!',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Netrik XR',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Netrik XR - #1 Augmented Reality Company',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter Card - Enhanced for Brand
  twitter: {
    card: 'summary_large_image',
    title: 'Netrik XR | #1 AR Company - Photo Frames, Business Cards & Menus',
    description: 'Transform your business with Netrik XR augmented reality. No app required - just scan! Visit netrikxr.com',
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

// JSON-LD Structured Data for Organization - ENHANCED FOR BRAND SEARCHES
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Netrik XR',
  legalName: 'Netrik XR',
  alternateName: ['NetrikXR', 'Netrik', 'netrikxr', 'NETRIK XR', 'Netrik AR', 'netrik xr'],
  url: siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/netrik-xr-logo.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  description: 'Netrik XR is the #1 augmented reality company providing AR photo frames, AR business cards, AR restaurant menus, and web development services. Visit netrikxr.com',
  foundingDate: '2024',
  slogan: 'Transform Reality with Netrik XR',
  brand: {
    '@type': 'Brand',
    name: 'Netrik XR',
    alternateName: ['NetrikXR', 'Netrik'],
    logo: `${siteUrl}/netrik-xr-logo.png`,
    slogan: 'No App Required - Just Scan',
  },
  sameAs: [
    'https://twitter.com/netrikxr',
    'https://linkedin.com/company/netrikxr',
    'https://instagram.com/netrikxr',
    'https://facebook.com/netrikxr',
    'https://github.com/netrikxr',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+1-656-214-5190',
      contactType: 'customer service',
      email: 'namasterides@gmail.com',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      telephone: '+1-656-214-5190',
      contactType: 'sales',
      email: 'namasterides@gmail.com',
      availableLanguage: ['English'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  knowsAbout: [
    'Augmented Reality',
    'AR Development',
    'WebAR',
    'AR Photo Frames',
    'AR Business Cards',
    'AR Restaurant Menus',
    '3D Modeling',
    'Web Development',
  ],
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
  alternateName: ['NetrikXR', 'Netrik'],
  image: `${siteUrl}/netrik-xr-logo.png`,
  url: siteUrl,
  telephone: '+1-656-214-5190',
  email: 'namasterides@gmail.com',
  priceRange: '$$',
  description: 'Netrik XR - #1 augmented reality solutions provider. AR photo frames, business cards, restaurant menus & web development. Visit netrikxr.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://twitter.com/netrikxr',
    'https://linkedin.com/company/netrikxr',
    'https://instagram.com/netrikxr',
  ],
}

// JSON-LD FAQ Schema (helps with rich snippets in search results)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteUrl}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Netrik XR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Netrik XR (netrikxr.com) is a leading augmented reality company that creates AR photo frames, AR business cards, AR restaurant menus, and custom AR experiences. Our solutions require no app download - just scan and experience!',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Netrik XR AR experiences work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Netrik XR uses WebAR technology that works directly in your smartphone browser. Simply scan a QR code or image marker, and the AR content appears instantly - no app installation required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Netrik XR offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Netrik XR offers AR Photo Frames (photos that play videos), AR Business Cards (interactive digital cards), AR Restaurant Menus (3D food visualization), AR Real Estate (virtual property tours), 3D Modeling services, and full web development.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I contact Netrik XR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Netrik XR at netrikxr.com, call +1-656-214-5190, or email namasterides@gmail.com. We offer free consultations for all AR projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Netrik XR require users to download an app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! All Netrik XR augmented reality experiences work instantly in web browsers. Users simply scan a code and the AR content loads - no app download needed.',
      },
    },
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
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
