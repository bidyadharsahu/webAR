import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'News - Latest Updates from Netrik XR',
  description: 'Stay updated with the latest news from Netrik XR. Product launches, partnerships, AR industry updates, and company announcements.',
  keywords: [
    'Netrik XR news', 'AR news', 'augmented reality news',
    'Netrik XR updates', 'AR product launches', 'AR announcements',
    'AR industry news', 'WebAR news', 'Netrik XR press'
  ],
  openGraph: {
    title: 'News - Latest Updates from Netrik XR',
    description: 'Stay updated with the latest news from Netrik XR. Product launches, partnerships, and company announcements.',
    url: `${baseUrl}/resources/news`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/resources/news`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
