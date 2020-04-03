import React from 'react';
import styles from './ReviewsList.module.css';

const ReviewsList = ({reviews}) => {
    return <div>
        {reviews.map((review, index) => {
            return <div className={styles.review} key={index}>
                <img src={review.imageUrl} alt={"Avatar"}/>
                <div className={styles.info}>
                    <p className={styles.main}>{review.name} - {new Date(review.date.seconds).toDateString()}</p>
                    <p>{review.text}</p>
                </div>
            </div>
        })}
    </div>
};

export default ReviewsList;