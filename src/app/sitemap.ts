import type { MetadataRoute } from 'next';

const base = 'https://harakez.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/submit`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/manifesto`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
