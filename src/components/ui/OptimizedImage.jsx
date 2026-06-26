'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OptimizedImage = ({
  src,
  alt,
  className,
  priority = false,
  fallbackSrc = '/logo.svg',
  width = 800,
  height = 600,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setImgSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

  return (
    <Image
      src={imgSrc}
      alt={alt || 'Escort Service Udaipur'}
      className={className}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      priority={priority}
      width={width}
      height={height}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ objectFit: 'cover' }}
      {...props}
    />
  );
};

export default OptimizedImage;