import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, fallbackSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ...props }) => {
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
      {...props}
    />
  );
};

export default OptimizedImage;