import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Get Your Moment - AR Photo Frame Product',
  description: 'Get Your Moment by Netrik XR - Transform any photo into an AR experience. Perfect for weddings, birthdays, memorials. Create lasting memories with augmented reality.',
  keywords: [
    'Get Your Moment', 'AR photo product', 'photo AR gift',
    'wedding AR', 'birthday AR gift', 'memorial AR',
    'Netrik XR product', 'AR memories', 'photo gift'
  ],
  openGraph: {
    title: 'Get Your Moment - AR Photo Frame Product | Netrik XR',
    description: 'Transform any photo into an AR experience. Perfect for weddings, birthdays, memorials.',
    url: `${baseUrl}/product/get-your-moment`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/product/get-your-moment`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
