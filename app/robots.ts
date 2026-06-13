import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/keystatic/', '/api/keystatic/'],
      },
    ],
    sitemap: 'https://lembertstudio.com/sitemap.xml',
    host: 'https://lembertstudio.com',
  }
}
