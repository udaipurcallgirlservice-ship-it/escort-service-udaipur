import React, { useState, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  fallbackSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
  width,
  height,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
    setError(false);
  }, [src, fallbackSrc]);

  const handleError = () => {
    if (!error) {
      setError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading={priority ? undefined : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      width={width || 800}
      height={height || 533}
      {...props}
    />
  );
};

export default OptimizedImage;