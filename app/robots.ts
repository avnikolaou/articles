import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/'
  },
  sitemap: `${baseUrl}/sitemap.xml`,
  host: baseUrl
});

export default robots;
