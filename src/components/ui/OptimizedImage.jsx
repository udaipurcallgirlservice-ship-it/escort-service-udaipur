'use client';

import React, { useState, useEffect } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  fallbackSrc = '/assets/df35c36717dc1b1000ac06911bfe1a65.webp',
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
      console.error(`Image failed to load: ${imgSrc}`);
      setError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // Use regular img tag for faster build
  return (
    <img
      src={imgSrc}
      alt={alt || 'Escort Service Udaipur'}
      className={className}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      width={width || 800}
      height={height || 600}
      {...props}
    />
  );
};

export default OptimizedImage;