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
import HeaderButton from "../HeaderButton/HeaderButton";
import Footer from "../Footer/Footer";
import itemImg from "../../assets/img/item.svg";

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
        <FixedMenu lessons={props.course.lessons} reviews={props.course.reviews}/>
        <div className={styles.main}>
            <div className={styles.info}>
                <Description description={props.course.description}/>
                <div id={"lessons"}>
                {props.course.lessons && <WhatLearn lessons={props.course.lessons}/>}
                </div>
                <div id={"reviews"}>
                    {props.course.program && <Lessons lessons={props.course.program}/>}
                </div>
                    {props.course.reviews && props.course.reviews.length > 0 ? <ReviewsList reviews={props.course.reviews}/> :
                        <p>No reviews yet</p>}
            </div>
            <div className={styles.side}>
                {props.course.videoId && <YouTube className={styles.video} videoId={props.course.videoId}/>}
                <div className={styles.enroll}>
                    <p className={styles.price}>${props.course.price}</p>
                    <HeaderButton text={"Enroll now"} link={`/enroll/${props.match.params.course}`}/>
                </div>
                <div className={styles.includes}>
                    {props.course.includes && <ul>
                        <h3 className={styles.includesHeader}>What includes</h3>
                        {props.course.includes.map((item, index) => {
                            return <li key={index}><img src={itemImg} alt={"Includes item"}/>{item}</li>
                        })}
                    </ul>}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
};

export default connect((state) => ({course: state.currentCourse.course,
        isFetching: state.currentCourse.isFetching,
        user: state.user.user}),
    {getCourseByName})(CourseDetailLayout);
