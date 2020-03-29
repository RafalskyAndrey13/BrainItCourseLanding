import React from 'react';
import styles from "./FeaturesLayout.module.css";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import icon from "../../assets/img/school-icon.svg";
import {connect} from "react-redux";

const FeaturesLayout = (props) => {
    return <div className={styles.wrapper}>
        {props.features.map((feature, index) => <FeaturesItem key={index} imgUrl={icon} title={feature.title} description={feature.description}/>)}
    </div>
};

export default connect(state => ({features: state.features.data}), null)(FeaturesLayout);