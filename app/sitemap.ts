import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '../lib/blog';

const baseUrl = 'https://escortserviceudaipur.com';

const staticPaths = [
  ['', 'weekly', 1.0],
  ['/about', 'monthly', 0.8],
  ['/services', 'weekly', 0.9],
  ['/enhancements', 'monthly', 0.7],
  ['/gallery', 'weekly', 0.8],
  ['/contact', 'monthly', 0.8],
  ['/blog', 'daily', 0.8],
  ['/privacy-policy', 'yearly', 0.4],
  ['/terms-of-service', 'yearly', 0.4],
  ['/escorts/russian', 'weekly', 0.8],
  ['/escorts/vip', 'weekly', 0.9],
  ['/escorts/model', 'weekly', 0.8],
  ['/escorts/housewife', 'weekly', 0.8],
  ['/escorts/independent', 'weekly', 0.8],
  ['/escort-service-in-udaipur', 'weekly', 1.0],
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();
  const now = new Date();

  const staticPages = staticPaths.map(([path, changeFrequency, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
