import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaUpdater = ({ title, description, keywords, path, schema, imageUrl, noIndex }) => {
  const schemas = Array.isArray(schema) ? schema : [schema].filter(Boolean);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {path && <link rel="canonical" href={path} />}
      
      {noIndex && <meta name="robots" content="noindex, follow" />}
      
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {path && <meta property="og:url" content={path} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Escort Service Udaipur" />
      
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {schemas.map((schemaItem, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schemaItem)}
        </script>
      ))}
    </Helmet>
  );
};

export default MetaUpdater;