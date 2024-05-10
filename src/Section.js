import React from "react";
import styles from './mystyles.module.css'; 
import imagesImport from './assets/images'
  

const Section = ({ marker, map }) => {
    
  return (
    <div id = {marker.key} className={styles.card} onClick={() => map.current.flyTo(marker.position,13)}>
    <div>
      <h2>this is the tule {marker.key} </h2>
      <p>Storyasdf contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
    </p>
    {
        marker.images.map((image) => (
            <img src={imagesImport[image]} style={{ width: '100px', height: '100px' }}/>
        ))
    }
    </div>
  </div>
  )
}

export default Section;