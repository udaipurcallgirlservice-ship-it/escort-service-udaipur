interface RatingWidgetProps {
  rating: number;
  count: number;
  productName: string;
}

export default function RatingWidget({ rating, count, productName }: RatingWidgetProps) {
  const stars = Math.round(rating);

  return (
    <div
      className="rating-widget inline-flex items-center gap-2 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-2"
      itemScope
      itemType="https://schema.org/AggregateRating"
      aria-label={`${productName}: ${rating} out of 5 stars, ${count} reviews`}
    >
      <meta itemProp="itemReviewed" content={productName} />
      <span className="text-yellow-500 text-lg tracking-wider" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (i < stars ? '★' : '☆')).join('')}
      </span>
      <span className="text-sm font-semibold text-gray-800">
        <span itemProp="ratingValue">{rating}</span>
        <meta itemProp="bestRating" content="5" />
        /5
      </span>
      <span className="text-xs text-gray-500">
        (<span itemProp="ratingCount">{count}</span> reviews)
      </span>
    </div>
  );
}
