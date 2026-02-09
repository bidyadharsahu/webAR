import { MetadataRoute } from 'next'

const baseUrl = 'https://netrikxr.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()
  
  // Main pages with high priority
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/try-now`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Service pages - high priority for conversions
  const servicePages = [
    'ar-photo-frames',
    'ar-business-cards',
    'restaurant-menu',
    'real-estate-ar',
    '3d-modeling',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Product pages
  const productPages = [
    'get-your-moment',
    'partner-with-restaurants',
  ].map((product) => ({
    url: `${baseUrl}/product/${product}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Company pages
  const companyPages = [
    'about',
    'careers',
  ].map((page) => ({
    url: `${baseUrl}/company/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Resources pages
  const resourcePages = [
    'blog',
    'news',
    'videos',
    'white-papers',
  ].map((resource) => ({
    url: `${baseUrl}/resources/${resource}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...mainPages,
    ...servicePages,
    ...productPages,
    ...companyPages,
    ...resourcePages,
    ...legalPages,
  ]
}
