import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaUpdater = ({ title, description, keywords, path, schema, imageUrl, noIndex }) => {
  // In Next.js App Router, metadata is handled server-side via export const metadata / generateMetadata.
  // We disable Helmet here to prevent severe hydration mismatches that crash the app in production
  // and cause Google Search Console to say "Oops! Something went wrong".
  return null;
};

export default MetaUpdater;