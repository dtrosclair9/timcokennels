import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/gun-dog-training-louisiana`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/program`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/gun-dog-training-thibodaux-la`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/duck-dog-training-houma-la`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/facility`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
