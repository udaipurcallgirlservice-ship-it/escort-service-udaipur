import { createReviewSchema } from './reviewSchema';

export const createMultipleReviewsSchema = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return [];
  }
  return reviews.map(review => createReviewSchema(review));
};