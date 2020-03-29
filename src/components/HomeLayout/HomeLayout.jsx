import Header from "../Header/Header";
import PostHeader from "../PostHeader/PostHeader";
import FeaturesLayout from "../FeaturesLayout/FeaturesLayout";
import PopularCoursesLayout from "../PopularCoursesLayout/PopularCoursesLayout";
import CategoriesLayout from "../CategoriesLayout/CategoriesLayout";
import EventLayout from "../EventsLayout/EventsLayout";
import ReviewLayout from "../ReviewLayout/ReviewLayout";
import Footer from "../Footer/Footer";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {loadInitData} from "../../redux/reducers/app-reducer";
import Preloader from "../Preloader/Preloader";
import {resetState} from "../../redux/reducers/sign-reducer";

const HomeLayout = (props) => {
    useEffect(() => {
        props.resetState();
        props.loadInitData();
    }, []);

    return props.isFetching ? <Preloader/> : <div>
        <Header/>
        <PostHeader/>
        <FeaturesLayout/>
        <PopularCoursesLayout/>
        <CategoriesLayout/>
        <EventLayout/>
        <ReviewLayout/>
        <Footer/>
    </div>
};

export default connect((state) => ({isFetching: state.app.isFetching, user: state.user.user}), {loadInitData, resetState})(HomeLayout);

