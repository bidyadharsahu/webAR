import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'About Netrik XR - Leading Augmented Reality Company',
  description: 'Learn about Netrik XR, a pioneering augmented reality company. We create AR photo frames, business cards, restaurant menus & custom AR solutions. Our mission is to make AR accessible to everyone.',
  keywords: [
    'about Netrik XR', 'Netrik XR company', 'AR company',
    'augmented reality company', 'AR solutions provider', 'Netrik XR team',
    'AR innovation', 'WebAR company', 'Netrik XR mission'
  ],
  openGraph: {
    title: 'About Netrik XR - Leading Augmented Reality Company',
    description: 'Learn about Netrik XR, a pioneering augmented reality company creating innovative AR solutions.',
    url: `${baseUrl}/company/about`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'About Netrik XR',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Netrik XR - Leading Augmented Reality Company',
    description: 'Learn about Netrik XR, a pioneering augmented reality company.',
  },
  alternates: {
    canonical: `${baseUrl}/company/about`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
