import type { Metadata } from 'next';
import type { BlogPost } from './blog';

export const siteUrl = 'https://escortserviceudaipur.com';

export function absoluteUrl(path = '/') {
  return path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = '/logo.svg',
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 4) {
  return allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => ({
      post,
      score:
        post.tags.filter((tag) => currentPost.tags.includes(tag)).length +
        (post.category === currentPost.category ? 2 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
