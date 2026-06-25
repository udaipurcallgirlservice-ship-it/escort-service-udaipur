import type { Metadata } from 'next';
import ClientShell from '../../../src/next/ClientShell';
import { siteUrl } from '../../../lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = `${slug.replace(/-/g, ' ')} | Escort Service Udaipur Blog`;
  const description =
    'Escort Service Udaipur blog guide with discreet adult booking advice, verified companion tips and privacy-first local insights.';

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      images: [{ url: '/assets/df35c36717dc1b1000ac06911bfe1a65.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default function Page() {
  return <ClientShell page="blogPost" />;
}
