import React, {useEffect} from 'react';
import Header from "../Header/Header";
import CourseDetailPostHeader from "../CourseDetailPostHeader/CourseDetailPostHeader";
import FixedMenu from "../FixedMenu/FixedMenu";
import {connect} from "react-redux";
import {getCourseByName} from "../../redux/reducers/current-course-reducer";
import Preloader from "../Preloader/Preloader";
import Description from "../Description/Description";

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
        <Description description={props.course.description}/>
    </div>
};

export default connect((state) => ({course: state.currentCourse.course, isFetching: state.currentCourse.isFetching}), {getCourseByName})(CourseDetailLayout);
