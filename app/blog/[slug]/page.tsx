import type { Metadata } from 'next';
import ClientShell from '../../../src/next/ClientShell';
import { siteUrl } from '../../../lib/seo';
import { getBlogPost, getAllBlogPosts } from '../../../lib/blog';
import JsonLd from '../../../components/seo/JsonLd';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    const title = 'Blog Post Not Found - Escort Service Udaipur';
    return {
      title,
      description: 'The requested escort service blog article was not found.',
      alternates: { canonical: `${siteUrl}/blog/${slug}` },
    };
  }

  const title = post.title;
  const description = post.description;

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [post.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return <ClientShell page="notFound" />;
  }

  // Pre-generate JSON-LD schemas
  const schemas: object[] = [];

  // 1. Article Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
    headline: post.title,
    description: post.description,
    image: `${siteUrl}${post.image}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: 'Escort Service Expert',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Escort Service Udaipur',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleBody: post.content.replace(/<[^>]*>?/gm, ''),
  });

  // 2. FAQ Schema if present
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  // 3. Aggregate Rating Schema if present
  if (post.rating) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: post.title,
      image: `${siteUrl}${post.image}`,
      description: post.description,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: post.rating.value,
        reviewCount: post.rating.count,
        bestRating: '5',
        worstRating: '1',
      },
    });
  }

  return (
    <>
      <JsonLd data={schemas} />
      <ClientShell page="blogPost" />
    </>
  );
}
