import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'AR Business Cards - Make Your First Impression Unforgettable',
  description: 'Create interactive AR business cards with Netrik XR. Share portfolios, videos, contact info instantly when scanned. Stand out in networking. No app required for viewers!',
  keywords: [
    'AR business cards', 'augmented reality business cards', 'digital business cards',
    'interactive business cards', 'NFC business cards', 'smart business cards',
    'networking AR', 'professional AR', 'Netrik XR business cards',
    'video business cards', 'portfolio cards', 'QR business cards'
  ],
  openGraph: {
    title: 'AR Business Cards - Make Your First Impression Unforgettable | Netrik XR',
    description: 'Create interactive AR business cards. Share portfolios, videos, contact info instantly when scanned. Stand out in networking.',
    url: `${baseUrl}/services/ar-business-cards`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR AR Business Cards',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Business Cards - Make Your First Impression Unforgettable',
    description: 'Create interactive AR business cards with Netrik XR. Stand out in networking.',
  },
  alternates: {
    canonical: `${baseUrl}/services/ar-business-cards`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
