import React, { useState, useEffect, useRef } from 'react';
import styles from './mystyles.module.css'; 
import imagesImport from './assets/images'
  

const Section = ({ marker, map }) => {

  const divRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if ((rect.top + rect.bottom)/2 < windowHeight*2/3 && rect.top > 0 && rect.bottom > windowHeight/2 ) {
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
    <div id = {marker.key} className={styles.card} onClick={() => map.current.flyTo(marker.position,13)}>
    <div ref={divRef}>
      <h2>this is the tule {marker.key} </h2>
      <p>Storyasdf contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
    </p>
    {
        marker.images.map((image) => (
            <img key={marker.key + imagesImport[image]} src={imagesImport[image]} style={{ width: '100px', height: '100px' }}/>
        ))
    }
    </div>
  </div>
  )
}

export default Section;