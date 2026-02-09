import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'White Papers - AR Research & Industry Reports',
  description: 'Download Netrik XR white papers on augmented reality. Research reports, industry analysis, AR ROI studies, and implementation guides for businesses.',
  keywords: [
    'AR white papers', 'AR research', 'augmented reality reports',
    'AR ROI', 'AR industry analysis', 'Netrik XR white papers',
    'AR implementation guide', 'AR business case', 'WebAR research'
  ],
  openGraph: {
    title: 'White Papers - AR Research & Industry Reports | Netrik XR',
    description: 'Download Netrik XR white papers on augmented reality research and industry analysis.',
    url: `${baseUrl}/resources/white-papers`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/resources/white-papers`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
