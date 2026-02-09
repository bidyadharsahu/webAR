import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Blog - AR Tips, Tutorials & Industry Insights',
  description: 'Explore the Netrik XR blog for AR tips, tutorials, case studies, and industry insights. Learn how augmented reality is transforming businesses across industries.',
  keywords: [
    'AR blog', 'augmented reality blog', 'AR tutorials', 'AR tips',
    'Netrik XR blog', 'AR case studies', 'AR industry news',
    'WebAR tips', 'AR for business blog', 'AR technology insights'
  ],
  openGraph: {
    title: 'Blog - AR Tips, Tutorials & Industry Insights | Netrik XR',
    description: 'Explore the Netrik XR blog for AR tips, tutorials, case studies, and industry insights.',
    url: `${baseUrl}/resources/blog`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/resources/blog`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
