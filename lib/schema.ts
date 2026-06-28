export const siteUrl = 'https://escortserviceudaipur.com';
const logoUrl = `${siteUrl}/logo.svg`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Escort Service Udaipur',
  url: siteUrl,
  logo: logoUrl,
  sameAs: ['https://facebook.com/escortserviceudaipur', 'https://instagram.com/escortserviceudaipur'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8000253680',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Escort Service Udaipur',
  url: siteUrl,
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#localbusiness`,
  name: 'Escort Service Udaipur',
  image: logoUrl,
  url: siteUrl,
  telephone: '+91-8000253680',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'City Palace Road, Near Jagdish Temple',
    addressLocality: 'Udaipur',
    addressRegion: 'Rajasthan',
    postalCode: '313001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.5854,
    longitude: 73.7125,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],

};

export function articleSchema(post: {
  title: string;
  description: string;
  slug: string;
  authorName: string;
  authorUrl: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@type': 'Person', name: post.authorName, url: post.authorUrl },
    publisher: {
      '@type': 'Organization',
      name: 'Escort Service Udaipur',
      logo: { '@type': 'ImageObject', url: logoUrl },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}/blog/${post.slug}` },
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  availability?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@id': `${siteUrl}/#localbusiness`,
    },
    url: service.url,
    areaServed: {
      '@type': 'City',
      name: 'Udaipur',
      '@id': 'https://en.wikipedia.org/wiki/Udaipur',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'INR',
        availability: service.availability || 'https://schema.org/InStock',
      },
    }),
  };
}

export function ratingSchema(data: { itemName: string; ratingValue: number; bestRating: number; ratingCount: number }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.itemName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: data.ratingValue,
      bestRating: data.bestRating,
      ratingCount: data.ratingCount,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
