import React from "react";
import styles from "./FeaturesItem.module.css"

const FeaturesItem = ({imgUrl, title, description}) => {
    return <div className={styles.wrapper}>
        <img src={imgUrl} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
};

export default FeaturesItem;