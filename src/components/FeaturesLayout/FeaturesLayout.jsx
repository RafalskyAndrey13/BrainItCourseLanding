import React from 'react';
import styles from "./FeaturesLayout.module.css";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import icon from "../../assets/img/school-icon.svg";

const FeaturesLayout = () => {
    return <div className={styles.wrapper}>
        <FeaturesItem imgUrl={icon} title={"+200 courses"} description={"Explore a variety of fresh topics"}/>
        <FeaturesItem imgUrl={icon} title={"+200 courses"} description={"Explore a variety of fresh topics"}/>
        <FeaturesItem imgUrl={icon} title={"+200 courses"} description={"Explore a variety of fresh topics"}/>
    </div>
};

export default FeaturesLayout;