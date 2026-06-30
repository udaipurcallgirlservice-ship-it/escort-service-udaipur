import ClientShell from '../src/next/ClientShell';
import { seoPages } from './seoPages';
import JsonLd from '../components/seo/JsonLd';
import FAQJsonLd from '../components/seo/FAQJsonLd';
import { breadcrumbSchema, localBusinessSchema, siteUrl, websiteSchema } from '../lib/schema';
import { homeFaqs } from '../lib/homeFaqs';

export const metadata = seoPages.home;

export default function Page() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: 'Escort Service Udaipur | Call Girls from Rs.2999',
      description:
        'Book Call Girls Udaipur & Udaipur Escorts from Rs.2999. Premium Escort Services, 24x7 Escort Service in Udaipur with Cash on Delivery, WhatsApp Booking.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#localbusiness` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/udaipur-escort-service.jpg`,
      },
    },
    websiteSchema,
    localBusinessSchema,
    breadcrumbSchema([{ name: 'Home', url: `${siteUrl}/` }]),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <FAQJsonLd faqs={homeFaqs} />
      <ClientShell page="home" />
    </>
  );
}
