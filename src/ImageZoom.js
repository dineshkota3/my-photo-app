import React from 'react';
import './ImageZoom.css'; // Import the CSS file for styling

const ImageZoom = ({ src, alt }) => {

    const handleHover = (e) => {
        const image = e.target;
        const rect = image.getBoundingClientRect();
    
        const centerX = window.innerWidth*3 / 4;
        const centerY = window.innerHeight / 2;
    
        const imageX = rect.left + rect.width / 2;
        const imageY = rect.top + rect.height / 2;
    
        const translateX = centerX - imageX;
        const translateY = centerY - imageY;
    
        image.style.transform = `translate(${translateX}px, ${translateY}px) scale(6)`;
      };
    
      const handleLeave = (e) => {
        e.target.style.transform = 'none';
      };

  return (
        <img src={src} alt={alt} className="image-zoom" 
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}/>
  );
}

export default ImageZoom;
