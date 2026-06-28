import ClientShell from '../src/next/ClientShell';
import { seoPages } from './seoPages';
import JsonLd from '../components/seo/JsonLd';
import { breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema, siteUrl, websiteSchema } from '../lib/schema';
import { homeFaqs } from '../lib/homeFaqs';

export const metadata = seoPages.home;

export default function Page() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'Premium Escort Services in Udaipur - Call Girls Udaipur ₹2999',
      description:
        'Book Call Girls Udaipur & Udaipur Escorts from ₹2999. Premium Escort Services, 24x7 Escort Service in Udaipur with Cash on Delivery, WhatsApp Booking.',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#localbusiness` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/udaipur-escort-service.jpg`,
      },
    },
    websiteSchema,
    localBusinessSchema,
    serviceSchema({
      name: 'Premium Escort Service in Udaipur',
      description:
        'Premium Escort Service in Udaipur with Call Girls Udaipur, Udaipur Escorts, VIP Escorts, Russian Escorts, Independent Call Girls and WhatsApp Booking.',
      url: siteUrl,
      price: '2999',
    }),
    breadcrumbSchema([{ name: 'Home', url: siteUrl }]),
    faqSchema(homeFaqs),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <ClientShell page="home" />
    </>
  );
}
