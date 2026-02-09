import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: '3D Modeling Services - Professional AR-Ready Models',
  description: 'Professional 3D modeling services by Netrik XR. Create AR-ready 3D models for products, food, architecture. High-quality, optimized for web AR. Fast turnaround!',
  keywords: [
    '3D modeling services', '3D modeling for AR', 'AR 3D models',
    'product 3D models', 'food 3D models', 'architecture 3D',
    'web AR models', 'Netrik XR 3D modeling', '3D visualization',
    'professional 3D models', '3D scanning', 'photogrammetry'
  ],
  openGraph: {
    title: '3D Modeling Services - Professional AR-Ready Models | Netrik XR',
    description: 'Professional 3D modeling services. Create AR-ready 3D models for products, food, architecture. High-quality and optimized for web AR.',
    url: `${baseUrl}/services/3d-modeling`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR 3D Modeling Services',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Modeling Services - Professional AR-Ready Models',
    description: 'Professional 3D modeling services by Netrik XR. AR-ready models with fast turnaround.',
  },
  alternates: {
    canonical: `${baseUrl}/services/3d-modeling`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
