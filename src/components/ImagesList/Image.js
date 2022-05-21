import React from "react";

import styles from "../../styles/Image.module.css";


function Image(props){
    return (
        <div className={styles.Image}>
            <img src={props.image.urls.regular} alt={props.image.id}/>
        </div>
    )
}

export default Image;