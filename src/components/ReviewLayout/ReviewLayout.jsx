import React from 'react';
import styles from './ReviewLayout.module.css';
import YouTube from "react-youtube";
import SectionHeader from "../SectionHeader/SectionHeader";
import ReviewItem from "../ReviewItem/ReviewItem";
import {connect} from "react-redux";

const ReviewLayout = (props) => {
    return <div className={styles.wrapper}>
        <SectionHeader title={"Отзывы студентов"} description={"Cum doctus civibus efficiantur in imperdiet deterruisset"}/>
        <div className={styles.reviews}>
            {props.reviews.map((review, index) => <ReviewItem key={index} videoUrl={review.reviewId}/>)}
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    reviews: state.reviews.data,
});

export default connect(mapStateToProps, null)(ReviewLayout);