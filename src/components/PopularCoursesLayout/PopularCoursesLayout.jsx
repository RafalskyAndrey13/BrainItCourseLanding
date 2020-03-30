import React from 'react';
import styles from './PopularCoursesLayout.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseItem from "../CourseItem/CourseItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import {connect} from "react-redux";


const PopularCoursesLayout = (props) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return <div className={styles.wrapper}>
        <SectionHeader title={'Udema Popular Courses'} description={'Cum doctus civibus efficiantur in imperdiet deterruisset.'}/>
        <div className={styles.courses_list}>
            <Slider {...settings}>
                {props.data.map((course, index) => <CourseItem key={index} imgUrl={course.imageUrl} price={course.price} category={course.category.title}
                description={course.description} rate={course.rate} votingNumber={course.numberOfVotes} duration={course.duration}
                likes={course.likes} title={course.title}/>)}
</Slider>
        </div>
        <div className={styles.controls}>
            <HeaderButton text={"View all courses"}/>
        </div>

    </div>
};

const mapStateToProps = (state) => ({
    data: state.popularCourses.data,
});

export default connect(mapStateToProps, null)(PopularCoursesLayout);