import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'AR Real Estate - Virtual Property Tours & Visualization',
  description: 'Revolutionize real estate with Netrik XR AR solutions. Virtual property tours, 3D floor plans, AR staging. Help buyers visualize properties anywhere. Increase engagement 5x!',
  keywords: [
    'AR real estate', 'augmented reality real estate', 'virtual property tours',
    '3D floor plans', 'AR staging', 'property visualization',
    'real estate AR', 'Netrik XR real estate', 'home AR',
    'property marketing', 'virtual home tours', 'AR property'
  ],
  openGraph: {
    title: 'AR Real Estate - Virtual Property Tours & Visualization | Netrik XR',
    description: 'Revolutionize real estate with AR solutions. Virtual property tours, 3D floor plans, AR staging. Help buyers visualize properties.',
    url: `${baseUrl}/services/real-estate-ar`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR AR Real Estate',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Real Estate - Virtual Property Tours & Visualization',
    description: 'Revolutionize real estate with AR solutions. Virtual tours and 3D visualization.',
  },
  alternates: {
    canonical: `${baseUrl}/services/real-estate-ar`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
