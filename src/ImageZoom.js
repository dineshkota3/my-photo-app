import React from 'react';
import './ImageZoom.css'; // Import the CSS file for styling

const ImageZoom = ({ src, alt }) => {
  return (
      <img src={src} alt={alt} className="image-zoom" />
  );
}

export default ImageZoom;
