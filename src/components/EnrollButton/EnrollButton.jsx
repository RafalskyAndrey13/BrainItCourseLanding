import React from 'react';
import styles from './EnrollButton.module.css';
import {NavLink} from "react-router-dom";

const EnrollButton = (props) => {
    console.log(props.course);
    return <NavLink to={`detail/${props.course.replace(" ", "_")}`}><button className={styles.enroll_button}>Enroll now</button></NavLink>
};

export default EnrollButton;