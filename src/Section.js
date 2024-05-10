import React from "react";
import styles from './mystyles.module.css'; 

const Section = ({ identification, map, positionValue }) => {
  return (
    <div id = {identification} className={styles.card} onClick={() => map.current.panTo(positionValue)}>
    <div>
      <h2>this is the tule {identification} </h2>
      <p>Storyasdf contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
            Story contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory contentStory content
    </p>
    </div>
  </div>
  )
}

export default Section;