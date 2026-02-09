import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Videos - AR Demos & Tutorials',
  description: 'Watch Netrik XR video tutorials and demos. See AR photo frames, business cards, and restaurant menus in action. Learn how to use our AR solutions.',
  keywords: [
    'AR videos', 'AR demos', 'AR tutorials video', 'Netrik XR videos',
    'augmented reality demo', 'AR photo frame video', 'AR business card demo',
    'AR menu demo video', 'how to use AR', 'AR walkthrough'
  ],
  openGraph: {
    title: 'Videos - AR Demos & Tutorials | Netrik XR',
    description: 'Watch Netrik XR video tutorials and demos. See AR solutions in action.',
    url: `${baseUrl}/resources/videos`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/resources/videos`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
