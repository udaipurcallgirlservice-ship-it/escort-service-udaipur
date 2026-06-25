import { del, list, put } from '@vercel/blob';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  author: {
    name: string;
    bio: string;
    avatar: string;
    twitter?: string;
    linkedin?: string;
  };
  datePublished: string;
  dateModified: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  faqs?: Array<{ question: string; answer: string }>;
  rating?: { value: number; count: number };
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const { blobs } = await list({ prefix: `blog/${slug}` });
    if (!blobs.length) return null;
    const response = await fetch(blobs[0].url, { next: { revalidate: 3600 } });
    return response.json();
  } catch {
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const { blobs } = await list({ prefix: 'blog/' });
    const posts = await Promise.all(
      blobs.map(async (blob) => {
        const response = await fetch(blob.url, { next: { revalidate: 3600 } });
        return response.json() as Promise<BlogPost>;
      }),
    );
    return posts.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
  } catch {
    return [];
  }
}

export async function saveBlogPost(post: BlogPost) {
  return put(`blog/${post.slug}.json`, JSON.stringify(post), {
    access: 'public',
    contentType: 'application/json',
  });
}

export async function deleteBlogPost(slug: string) {
  const { blobs } = await list({ prefix: `blog/${slug}` });
  await Promise.all(blobs.map((blob) => del(blob.url)));
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]+>/g, ' ');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
