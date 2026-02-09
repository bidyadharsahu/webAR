import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'AR Restaurant Menus - 3D Food Visualization & QR Ordering',
  description: 'Transform your restaurant with AR menus by Netrik XR. Show 3D food models, nutritional info, and enable easy QR ordering. Increase orders by 30%. No app needed for customers!',
  keywords: [
    'AR restaurant menu', 'augmented reality menu', 'QR menu', '3D food menu',
    'interactive restaurant menu', 'digital menu', 'contactless menu',
    'restaurant AR', 'food visualization', 'Netrik XR restaurant',
    '3D food models', 'menu ordering system', 'smart menu'
  ],
  openGraph: {
    title: 'AR Restaurant Menus - 3D Food Visualization & QR Ordering | Netrik XR',
    description: 'Transform your restaurant with AR menus. Show 3D food models, nutritional info, and enable easy QR ordering. Increase orders by 30%.',
    url: `${baseUrl}/services/restaurant-menu`,
    type: 'website',
    images: [{
      url: `${baseUrl}/og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Netrik XR AR Restaurant Menus',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AR Restaurant Menus - 3D Food Visualization & QR Ordering',
    description: 'Transform your restaurant with AR menus. Show 3D food models and enable easy ordering.',
  },
  alternates: {
    canonical: `${baseUrl}/services/restaurant-menu`,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
