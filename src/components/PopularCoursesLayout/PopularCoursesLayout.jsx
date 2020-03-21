import React from 'react';
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseItem from "../CourseItem/CourseItem";
import courseImg from '../../assets/img/course_image.jpg';
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


const PopularCoursesLayout = () => {
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
    return <div>
        <SectionHeader title={'Udema Popular Courses'} description={'Cum doctus civibus efficiantur in imperdiet deterruisset.'}/>
            <Slider {...settings}>
            <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                        "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                        rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
            <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                        "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                        rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
            <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                        "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                        rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
            <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                        "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                        "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                        rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
                <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                            "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                            "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                            rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
                <CourseItem imgUrl={courseImg} price={50} category={"Programming"} title={"Python Fundamentals"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                            "Adipisci amet animi beatae commodi consectetur consequuntur corporis culpa dolores" +
                            "est harum incidunt ipsa laudantium, optio placeat quisquam quod recusandae rem temporibus."}
                            rate={3} votingNumber={255} duration={'1h 30 min'} likes={234}/>
            </Slider>

    </div>
};

export default PopularCoursesLayout;