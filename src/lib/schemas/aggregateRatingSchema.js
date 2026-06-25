export const createAggregateRatingSchema = (rating) => ({
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "ProfessionalService",
    "name": rating.itemReviewedName || "Escort Service Udaipur"
  },
  "ratingValue": rating.ratingValue || "4.9",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": rating.ratingCount || "247",
  "reviewCount": rating.reviewCount || "189"
});