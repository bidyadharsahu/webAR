import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Pricing - Affordable AR Solutions for Every Business',
  description: 'Transparent pricing for Netrik XR AR solutions. AR photo frames from $99, business cards from $149, restaurant menus from $299. Custom enterprise plans available. Start free trial!',
  keywords: [
    'Netrik XR pricing', 'AR pricing', 'AR photo frame price',
    'AR business card cost', 'AR menu pricing', 'augmented reality cost',
    'affordable AR', 'enterprise AR pricing', 'Netrik XR plans',
    'AR subscription', 'AR for business pricing'
  ],
  openGraph: {
    title: 'Pricing - Affordable AR Solutions for Every Business | Netrik XR',
    description: 'Transparent pricing for AR solutions. AR photo frames, business cards, restaurant menus. Custom enterprise plans available.',
    url: `${baseUrl}/pricing`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR Pricing Plans',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Affordable AR Solutions for Every Business',
    description: 'Transparent pricing for Netrik XR AR solutions. Plans for every budget.',
  },
  alternates: {
    canonical: `${baseUrl}/pricing`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
