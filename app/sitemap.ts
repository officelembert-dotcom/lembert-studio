import { MetadataRoute } from 'next'
import { getAllWritings } from '@/lib/writings'

const base = 'https://lembertstudio.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const writingsEn = getAllWritings('en')
  const writingsDe = getAllWritings('de')

  const writingUrlsEn = writingsEn
    .filter((w) => w.date && !isNaN(new Date(w.date + 'T00:00:00').getTime()))
    .map((w) => ({
      url: `${base}/writings/${w.slug}`,
      lastModified: new Date(w.date + 'T00:00:00'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  const writingUrlsDe = writingsDe
    .filter((w) => w.date && !isNaN(new Date(w.date + 'T00:00:00').getTime()))
    .map((w) => ({
      url: `${base}/de/writings/${w.slug}`,
      lastModified: new Date(w.date + 'T00:00:00'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/de`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/de/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/de/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/work/retained-advisory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/de/work/retained-advisory`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/work/deep-day`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/de/work/deep-day`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/work/retreats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/de/work/retreats`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/voices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/de/voices`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/writings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/de/writings`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${base}/de/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...writingUrlsEn,
    ...writingUrlsDe,
  ]
}
