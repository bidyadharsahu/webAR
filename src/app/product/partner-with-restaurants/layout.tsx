import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Partner With Restaurants - AR Menu Partnership',
  description: 'Partner with Netrik XR to bring AR menus to your restaurant. Increase orders, enhance customer experience, reduce costs. Apply for restaurant partnership today!',
  keywords: [
    'restaurant partnership', 'AR menu partner', 'restaurant AR',
    'Netrik XR partnership', 'digital menu partner', 'QR menu partner',
    'restaurant technology', 'AR dining', 'food tech partner'
  ],
  openGraph: {
    title: 'Partner With Restaurants - AR Menu Partnership | Netrik XR',
    description: 'Partner with Netrik XR to bring AR menus to your restaurant. Increase orders and enhance customer experience.',
    url: `${baseUrl}/product/partner-with-restaurants`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/product/partner-with-restaurants`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
