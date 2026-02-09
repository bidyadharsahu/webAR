import type { Metadata } from 'next'

const baseUrl = 'https://netrikxr.com'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Netrik XR Privacy Policy. Learn how we collect, use, and protect your personal information. Your privacy and data security matter to us.',
  openGraph: {
    title: 'Privacy Policy | Netrik XR',
    description: 'Netrik XR Privacy Policy. Learn how we collect, use, and protect your personal information.',
    url: `${baseUrl}/privacy-policy`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
