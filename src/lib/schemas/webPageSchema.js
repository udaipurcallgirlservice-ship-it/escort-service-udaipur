export const createWebPageSchema = (url, name, description, keywords, imageUrl) => ({
  '@context': 'http://schema.org',
  '@type': 'WebPage',
  'url': url,
  'name': name,
  'description': description,
  'keywords': keywords,
  'image': imageUrl,
  'isPartOf': {
    '@type': 'WebSite',
    'url': 'https://escortserviceudaipur.com',
    'name': 'Escort Service Udaipur'
  },
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': url
  }
});