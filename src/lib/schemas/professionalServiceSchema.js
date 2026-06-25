export const createProfessionalServiceSchema = (siteUrl, pageDescription, keywords, imageUrl) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Escort Service Udaipur",
  "alternateName": ["Udaipur Escort Service", "Call Girls Udaipur", "Udaipur Call Girls Service"],
  "description": pageDescription,
  "slogan": "100% Genuine Call Girls with Cash on Delivery",
  "image": [
    imageUrl,
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/df35c36717dc1b1000ac06911bfe1a65.png",
    "https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/6b3e692b9069eeafd99d41bd8406c705.jpg"
  ],
  "logo": {
    "@type": "ImageObject",
    "url": imageUrl,
    "width": "300",
    "height": "300"
  },
  "@id": siteUrl,
  "url": siteUrl,
  "telephone": "+919549032117",
  "email": "escortserviceudaipur141@gmail.com",
  "priceRange": "₹2500 - ₹60000",
  "currenciesAccepted": "INR",
  "paymentAccepted": ["Cash", "Cash on Delivery", "Online Payment", "UPI", "PayTM", "Google Pay"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "City Palace Road, Near Jagdish Temple",
    "addressLocality": "Udaipur",
    "addressRegion": "Rajasthan", 
    "postalCode": "313001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.5794,
    "longitude": 73.6826
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Udaipur",
      "sameAs": "https://en.wikipedia.org/wiki/Udaipur"
    },
    {
      "@type": "State", 
      "name": "Rajasthan"
    }
  ],
  "serviceType": "Adult Entertainment Services",
  "provider": {
    "@type": "Organization",
    "name": "Escort Service Udaipur"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 24.5854,
      "longitude": 73.7125
    },
    "geoRadius": "50000"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "potentialAction": [
    {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/919549032117?text=Hello%2C%20I'm%20interested%20in%20your%20escort%20services.",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/IOSPlatform",
          "https://schema.org/AndroidPlatform"
        ]
      },
      "name": "Book Escort Service"
    },
    {
      "@type": "CommunicateAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "tel:+919549032117",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/IOSPlatform",
          "https://schema.org/AndroidPlatform"
        ]
      },
      "name": "Call for Escort Service"
    }
  ],
  "sameAs": [
    "https://facebook.com/escortserviceudaipur",
    "https://instagram.com/escortserviceudaipur"
  ],
  "founder": {
    "@type": "Person",
    "name": "Escort Service Udaipur Team"
  },
  "foundingDate": "2020",
  "knowsAbout": [
    "Escort Services",
    "Call Girls",
    "Adult Entertainment",
    "Companionship Services",
    "VIP Services"
  ],
  "keywords": keywords,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": siteUrl
  },
  "isAccessibleForFree": false,
  "audience": {
    "@type": "Audience",
    "audienceType": "Adult"
  }
});