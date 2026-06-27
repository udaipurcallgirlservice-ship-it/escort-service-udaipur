import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'cohere-ai',
          'Google-Extended',
        ],
        allow: '/',
        disallow: ['/admin/'],
      },
    ],
    sitemap: 'https://escortserviceudaipur.com/sitemap.xml',
  };
}
