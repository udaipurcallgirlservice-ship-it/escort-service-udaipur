export const createItemPageSchema = (pageData) => ({
  "@context": "https://schema.org",
  "@type": "ItemPage",
  "name": pageData.name,
  "description": pageData.description,
  "url": pageData.url,
  "mainEntity": {
    "@type": "Product",
    "name": pageData.name,
    "description": pageData.description,
    "image": pageData.image,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "url": pageData.url
    }
  }
});