/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'netrikxr.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable gzip compression for better performance (helps SEO)
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Powered by header removal for cleaner headers
  poweredByHeader: false,
  // Trailing slash configuration for consistent URLs
  trailingSlash: false,
  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets
        source: '/(.*)\\.(ico|png|svg|jpg|jpeg|gif|webp|avif|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  // Redirects for SEO consistency
  async redirects() {
    return [
      // Redirect www to non-www (or vice versa - configure in Vercel)
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
