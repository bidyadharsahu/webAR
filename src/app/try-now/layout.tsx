import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Try Now - Experience AR Photo Frames, Business Cards & Menus',
  description: 'Try Netrik XR AR experiences for free! Scan demo AR photo frames, business cards, and restaurant menus. See how augmented reality can transform your business. No app required!',
  keywords: [
    'try AR', 'AR demo', 'free AR experience', 'test AR',
    'Netrik XR demo', 'AR photo frame demo', 'AR business card demo',
    'AR menu demo', 'experience augmented reality', 'scan AR'
  ],
  openGraph: {
    title: 'Try Now - Experience AR Photo Frames, Business Cards & Menus | Netrik XR',
    description: 'Try Netrik XR AR experiences for free! Scan demo AR photo frames, business cards, and restaurant menus.',
    url: `${baseUrl}/try-now`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Try Netrik XR AR Demo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Try Now - Experience AR Photo Frames, Business Cards & Menus',
    description: 'Try Netrik XR AR experiences for free! No app required.',
  },
  alternates: {
    canonical: `${baseUrl}/try-now`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
