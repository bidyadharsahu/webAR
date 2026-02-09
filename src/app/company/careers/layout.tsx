import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Careers at Netrik XR - Join Our AR Innovation Team',
  description: 'Join Netrik XR and shape the future of augmented reality. We are hiring AR developers, 3D artists, and tech innovators. Remote-friendly with competitive benefits. Apply now!',
  keywords: [
    'Netrik XR careers', 'Netrik XR jobs', 'AR jobs',
    'augmented reality careers', 'AR developer jobs', '3D artist jobs',
    'tech jobs', 'Netrik XR hiring', 'work at Netrik XR'
  ],
  openGraph: {
    title: 'Careers at Netrik XR - Join Our AR Innovation Team',
    description: 'Join Netrik XR and shape the future of augmented reality. We are hiring AR developers, 3D artists, and tech innovators.',
    url: `${baseUrl}/company/careers`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Careers at Netrik XR',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Netrik XR - Join Our AR Innovation Team',
    description: 'Join Netrik XR and shape the future of augmented reality.',
  },
  alternates: {
    canonical: `${baseUrl}/company/careers`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
