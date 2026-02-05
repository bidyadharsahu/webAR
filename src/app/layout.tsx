import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Netrik XR | AR Photo Frames, Business Cards & Web Solutions',
  description: 'Transform your business with augmented reality. AR photo frames, AR business cards, and fully functional websites. No app required.',
  keywords: ['Netrik XR', 'augmented reality', 'AR photo frames', 'AR business cards', 'web development', 'AR restaurant menu', 'QR experience'],
  authors: [{ name: 'Netrik XR' }],
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'Netrik XR | AR Photo Frames, Business Cards & Web Solutions',
    description: 'Transform your business with augmented reality.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netrik XR | AR Photo Frames, Business Cards & Web Solutions',
    description: 'Transform your business with augmented reality.',
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
        <Chatbot />
      </body>
    </html>
  )
}
