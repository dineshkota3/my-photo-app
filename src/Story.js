import React, { useRef } from "react";
import Section from "./Section";
import styles from './mystyles.module.css'; 
import 'scrollable-component';
import constants from './constants.json';

const Story = ({map}) => {
    return (
        <div className={styles.maskedOverflow}>
            <div className = {styles.innerSection}>
                {constants.markers.map((marker) => (
                    <Section identification={marker.key} 
                                map = {map} 
                                positionValue ={marker.position}/>
                            ))
                    }
            </div>
        </div>
    );
}

export default Story;