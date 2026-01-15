import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WebAR | Moments & Menus Come Alive',
  description: 'Transform dining experiences with augmented reality. AR memories for customers, AR menus for restaurants. No app required.',
  keywords: ['WebAR', 'augmented reality', 'AR menu', 'restaurant technology', 'AR memories', 'QR experience'],
  authors: [{ name: 'WebAR' }],
  openGraph: {
    title: 'WebAR | Moments & Menus Come Alive',
    description: 'Transform dining experiences with augmented reality.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebAR | Moments & Menus Come Alive',
    description: 'Transform dining experiences with augmented reality.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
