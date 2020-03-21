import React from 'react';
import Header from "./components/Header/Header";
import PostHeader from "./components/PostHeader/PostHeader";
import withProvider from "./hoc/withProvider";
import FeaturesLayout from "./components/FeaturesLayout/FeaturesLayout";
import PopularCoursesLayout from "./components/PopularCoursesLayout/PopularCoursesLayout";

const App = () => {
    return <div>
        <Header/>
        <PostHeader/>
        <FeaturesLayout/>
        <PopularCoursesLayout/>

    </div>
};

export default withProvider(App);
