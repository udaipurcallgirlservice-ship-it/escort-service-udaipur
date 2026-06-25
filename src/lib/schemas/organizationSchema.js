export const createOrganizationSchema = (siteUrl, pageDescription) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Escort Service Udaipur",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.webp`,
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Palace Road",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919549032117",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "en"
    }
});