import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'AR Photo Frames - Transform Photos into Living Memories',
  description: 'Turn printed photos into interactive AR experiences with Netrik XR. Scan photos to play videos, messages, animations. Perfect for weddings, events, celebrations. No app required!',
  keywords: [
    'AR photo frames', 'augmented reality photo frames', 'interactive photo frames',
    'scan to play video', 'wedding AR', 'event AR', 'celebration AR',
    'living photos', 'animated photos', 'Netrik XR photo frames',
    'memorial AR', 'photo to video', 'QR photo frame'
  ],
  openGraph: {
    title: 'AR Photo Frames - Transform Photos into Living Memories | Netrik XR',
    description: 'Turn printed photos into interactive AR experiences. Scan to play videos, messages, or animations. Perfect for weddings and celebrations.',
    url: `${baseUrl}/services/ar-photo-frames`,
    type: 'website',
    images: [{
      url: `${baseUrl}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR AR Photo Frames',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Photo Frames - Transform Photos into Living Memories',
    description: 'Turn printed photos into interactive AR experiences with Netrik XR.',
  },
  alternates: {
    canonical: `${baseUrl}/services/ar-photo-frames`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
