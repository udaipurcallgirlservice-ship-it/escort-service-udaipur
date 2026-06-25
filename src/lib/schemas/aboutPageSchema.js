export const createAboutPageSchema = (pageUrl, pageTitle, pageDescription, publisher) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": pageUrl,
  "name": pageTitle,
  "description": pageDescription,
  "mainEntityOfPage": {
     "@type": "WebPage",
     "@id": pageUrl
  },
  "publisher": publisher
});