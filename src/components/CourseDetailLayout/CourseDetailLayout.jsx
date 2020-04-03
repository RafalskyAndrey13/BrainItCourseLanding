import React, {useEffect} from 'react';
import Header from "../Header/Header";
import CourseDetailPostHeader from "../CourseDetailPostHeader/CourseDetailPostHeader";
import FixedMenu from "../FixedMenu/FixedMenu";
import {connect} from "react-redux";
import {getCourseByName} from "../../redux/reducers/current-course-reducer";
import Preloader from "../Preloader/Preloader";
import Description from "../Description/Description";
import styles from './CourseDetailLayout.module.css';
import WhatLearn from "../WhatLearn/WhatLearn";
import Lessons from "../Lessons/Lessons";
import ReviewsList from "../ReviewsList/ReviewsList";
import YouTube from "react-youtube";
import EnrollButton from "../EnrollButton/EnrollButton";
import HeaderButton from "../HeaderButton/HeaderButton";
import Footer from "../Footer/Footer";

const CourseDetailLayout = (props) => {
    useEffect(() => {
        props.getCourseByName(props.match.params.course.replace("_", " "));
    }, []);

    if (!props.course){
        return <Preloader/>
    }

    return <div>
        <Header/>
        <CourseDetailPostHeader courseTitle={props.course.title}/>
        <FixedMenu/>
        <div className={styles.main}>
            <div className={styles.info}>
                <Description description={props.course.description}/>
                {props.course.lessons && <WhatLearn lessons={props.course.lessons}/>}
                {props.course.program && <Lessons lessons={props.course.program}/>}
                {props.course.reviews && props.course.reviews.length > 0 ? <ReviewsList reviews={props.course.reviews}/> :
                <p>No reviews yet</p>}
            </div>
            <div className={styles.side}>
                {props.course.videoId && <YouTube videoId={props.course.videoId}/>}
                <p>${props.course.price}</p>
                <HeaderButton text={"Enroll now"}/>
                <h3>What includes</h3>
                {props.course.includes && <ul>
                    {props.course.includes.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>}
            </div>
        </div>
        <Footer/>
    </div>
};

export default connect((state) => ({course: state.currentCourse.course, isFetching: state.currentCourse.isFetching}), {getCourseByName})(CourseDetailLayout);
