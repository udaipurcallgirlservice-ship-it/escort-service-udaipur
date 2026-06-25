export const createContactPageSchema = (pageUrl, pageTitle, pageDescription, telephone) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": pageUrl,
  "name": pageTitle,
  "description": pageDescription,
  "mainEntity": {
    "@type": "Organization",
    "name": "Escort Service Udaipur",
    "telephone": telephone
  }
});