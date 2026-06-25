export const createWebsiteSchema = (siteUrl, pageDescription) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Escort Service Udaipur",
  "alternateName": "Udaipur Escort Service",
  "url": siteUrl,
  "description": pageDescription,
  "inLanguage": "en-IN",
  "copyrightYear": new Date().getFullYear(),
  "copyrightHolder": {
    "@type": "Organization",
    "name": "Escort Service Udaipur"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Escort Service Udaipur",
    "logo": {
        "@type": "ImageObject",
        "url": "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/df35c36717dc1b1000ac06911bfe1a65.png",
        "width": 300,
        "height": 300
    },
    "url": siteUrl
  }
});