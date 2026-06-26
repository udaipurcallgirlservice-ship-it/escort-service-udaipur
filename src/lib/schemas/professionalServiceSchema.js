export const createProfessionalServiceSchema = (siteUrl, pageDescription, keywords, imageUrl) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Escort Service Udaipur",
  "alternateName": ["Udaipur Escort Service", "Call Girls Udaipur", "Udaipur Call Girls Service"],
  "description": pageDescription,
  "slogan": "100% Genuine Call Girls with Cash on Delivery",
  "image": [
    imageUrl,
    "/logo.svg",
    "/assets/6b3e692b9069eeafd99d41bd8406c705.webp"
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
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Udaipur Escort Service Tariff",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VIP Escort Service",
          "description": "High-profile models, luxury companions for social dinners and travel."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "7000",
          "priceCurrency": "INR",
          "unitText": "hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Russian Escort Service",
          "description": "Exotic European companions for premium dates and ultimate luxury companionship."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "12000",
          "priceCurrency": "INR",
          "unitText": "hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Model Escort Service",
          "description": "Fashion models and elite companions for events, parties, or dates."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "8000",
          "priceCurrency": "INR",
          "unitText": "hour"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Housewife Escort Service",
          "description": "Mature housewives and discreet companions for quiet private dates."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "5000",
          "priceCurrency": "INR",
          "unitText": "hour"
        }
      }
    ]
  },
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