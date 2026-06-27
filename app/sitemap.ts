import type { MetadataRoute } from 'next';
import { getAllBlogPosts } from '../lib/blog';

const baseUrl = 'https://escortserviceudaipur.com';

const staticPaths = [
  ['', 'weekly', 1.0, ['/assets/udaipur-escort-service.jpg', '/assets/premium-escort-service-udaipur.jpg']],
  ['/about', 'monthly', 0.8, ['/assets/professional-udaipur-escorts.jpg']],
  ['/services', 'weekly', 0.9, ['/assets/exclusive-escort-service-udaipur.jpg']],
  ['/enhancements', 'monthly', 0.7, ['/assets/luxury-escort-service-udaipur.jpg']],
  ['/gallery', 'weekly', 0.8, ['/assets/beautiful-escort-girls-udaipur.jpg']],
  ['/contact', 'monthly', 0.8, ['/assets/udaipur-escort-service.jpg']],
  ['/blog', 'daily', 0.8, ['/assets/romantic-companion-udaipur-escort.jpg']],
  ['/privacy-policy', 'yearly', 0.4, ['/logo.svg']],
  ['/terms-of-service', 'yearly', 0.4, ['/logo.svg']],
  ['/escorts/russian', 'weekly', 0.8, ['/assets/russian-escort-in-udaipur.jpg']],
  ['/escorts/vip', 'weekly', 0.9, ['/assets/vip-escort-in-udaipur.jpg']],
  ['/escorts/model', 'weekly', 0.8, ['/assets/model-escorts-in-udaipur.jpg']],
  ['/escorts/housewife', 'weekly', 0.8, ['/assets/private-call-girls-udaipur.jpg']],
  ['/escorts/independent', 'weekly', 0.8, ['/assets/independent-call-girls-udaipur.jpg']],
  ['/escort-service-in-udaipur', 'weekly', 1.0, ['/assets/udaipur-escort-service.jpg']],
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts();
  const now = new Date();

  const staticPages = staticPaths.map(([path, changeFrequency, priority, images]) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    images: images.map((image) => `${baseUrl}${image}`),
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    images: [post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`],
  }));

  return [...staticPages, ...blogPages];
}
