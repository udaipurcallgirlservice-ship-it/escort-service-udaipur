export const createReviewSchema = (review) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "ProfessionalService",
    "name": review.itemReviewedName || "Escort Service Udaipur",
    "image": review.itemReviewedImage,
    "address": review.itemReviewedAddress,
    "telephone": review.itemReviewedTelephone,
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.ratingValue || "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "name": review.name || "Excellent Service",
  "author": {
    "@type": "Person",
    "name": review.authorName || "Anonymous Client"
  },
  "reviewBody": review.reviewBody || "A truly professional and discreet service. Highly recommended for anyone seeking a memorable experience in Udaipur.",
  "publisher": {
    "@type": "Organization",
    "name": review.publisherName || "Escort Service Udaipur"
  }
});