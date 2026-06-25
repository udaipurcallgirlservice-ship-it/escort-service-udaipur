import { blogPosts, BlogPost } from '../src/data/blogPosts';

export type { BlogPost };

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find((p) => p.slug === slug);
  return post || null;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Sort posts by datePublished in descending order
  return [...blogPosts].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
}

export async function saveBlogPost(post: BlogPost) {
  // Since this is a static build, client updates are simulated or not persisted.
  // We keep the signature so admin compilation won't break if referenced.
  const index = blogPosts.findIndex((p) => p.slug === post.slug);
  if (index !== -1) {
    blogPosts[index] = post;
  } else {
    blogPosts.push(post);
  }
  return { url: `/blog/${post.slug}` };
}

export async function deleteBlogPost(slug: string) {
  // Simulator for admin panels
  const index = blogPosts.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    blogPosts.splice(index, 1);
  }
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]+>/g, ' ');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
