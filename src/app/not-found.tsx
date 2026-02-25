import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist. Return to Netrik XR homepage for AR photo frames, business cards, and restaurant menu solutions.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-cream via-sand to-cream">
      <div className="container-custom text-center py-20">
        <div className="max-w-2xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-primary/10 rounded-3xl flex items-center justify-center">
            <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-dark mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4">Page Not Found</h2>
          <p className="text-lg text-dark/60 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/" 
              className="btn-primary"
            >
              Back to Home
            </Link>
            <Link 
              href="/company/about" 
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-dark/10">
            <p className="text-sm text-dark/50 mb-4">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pricing" className="text-sm text-primary hover:underline">
                Pricing
              </Link>
              <span className="text-dark/20">•</span>
              <Link href="/company/careers" className="text-sm text-primary hover:underline">
                Careers
              </Link>
              <span className="text-dark/20">•</span>
              <Link href="/#experiences" className="text-sm text-primary hover:underline">
                Experiences
              </Link>
              <span className="text-dark/20">•</span>
              <Link href="/company/about" className="text-sm text-primary hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
