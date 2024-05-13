import React, { useState, useEffect, useRef } from 'react';
import styles from './mystyles.module.css'; 
import imagesImport from './assets/images'
import ImageZoom from './ImageZoom';
import './ImageZoom.css'; // Import the CSS file for styling
  

const Section = ({ marker, map }) => {

  const divRef = useRef(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight || document.documentElement.clientHeight);
  useEffect(() => {

    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeightInside = window.innerHeight || document.documentElement.clientHeight;
        if ((rect.top + rect.bottom)/2 < windowHeightInside*2/3 && rect.top > 0 && rect.bottom > windowHeightInside/2 ) {
            map.current.flyTo(marker.position,13);
        }
      }
    };
    const scrollContent = document.getElementById('originalStory');
    scrollContent.addEventListener('scroll', handleScroll);

    return () => {
        scrollContent.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  return (
    <div id = {marker.key} style = {{height : windowHeight*3/5}} className={styles.card} onClick={() => map.current.flyTo(marker.position,13)}>
    <div ref={divRef}>
      <h2 style = {{height : windowHeight*0.5/5}}>{marker.date} </h2>
      <p style = {{height : windowHeight*0.5/5}}>{marker.description}</p>
    <div style = {{height : windowHeight*2/5}} className="image-zoom-container"> 
    {
        marker.images.map((image) => (
            <ImageZoom key={marker.key + imagesImport[image]} src={imagesImport[image]} alt={marker.key + imagesImport[image]} />
        ))
    }
    </div>
    
    </div>
  </div>
  )
}

export default Section;