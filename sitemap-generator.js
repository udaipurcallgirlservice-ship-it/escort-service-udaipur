import fs from 'fs';
import { globby } from 'globby';
import path from 'path';

async function generate() {
  const siteUrl = 'https://escortserviceudaipur.com';
  
  const pages = await globby([
    'src/pages/**/*.jsx',
    '!src/pages/admin',
    '!src/pages/_*.jsx',
    '!src/pages/api',
    '!src/pages/404.jsx',
    '!src/pages/LoginPage.jsx',
    '!src/pages/SignupPage.jsx',
  ]);

  const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/enhancements',
    '/gallery',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/escort-service-in-udaipur',
  ];

  const serviceRoutes = [
    '/escorts/russian',
    '/escorts/vip',
    '/escorts/model',
    '/escorts/housewife',
    '/escorts/independent'
  ];

  const blogPostsData = [
    { slug: 'choosing-ideal-call-girl-udaipur-guide', date: '2025-06-12' },
    { slug: 'incall-vs-outcall-escort-services-udaipur', date: '2025-06-08' },
    { slug: 'maximizing-escort-experience-udaipur-call-girls', date: '2025-06-02' }
  ];

  const blogRoutes = blogPostsData.map(post => ({
    path: `/blog/${post.slug}`,
    lastmod: post.date,
  }));
  
  const today = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${`${siteUrl}${route}`}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${serviceRoutes.map(route => `
  <url>
    <loc>${`${siteUrl}${route}`}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  ${blogRoutes.map(route => `
  <url>
    <loc>${`${siteUrl}${route.path}`}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemapXml);
  console.log('Sitemap generated successfully in public/sitemap.xml');
}

generate();