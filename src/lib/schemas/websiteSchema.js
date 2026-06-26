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
        "url": "/logo.svg",
        "width": 300,
        "height": 300
    },
    "url": siteUrl
  }
});