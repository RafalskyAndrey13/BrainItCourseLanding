import React from 'react';
import styles from './ReviewItem.module.css';
import YouTube from "react-youtube";

const ReviewItem = ({videoUrl}) => {
    return <div className={styles.wrapper}>
        <YouTube videoId={videoUrl} className={styles.video}/>
    </div>

};

export default ReviewItem;