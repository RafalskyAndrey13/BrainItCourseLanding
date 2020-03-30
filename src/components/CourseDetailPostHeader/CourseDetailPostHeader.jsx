import React from 'react';
import styles from './CourseDetailPostHeader.module.css';
import FixedMenu from "../FixedMenu/FixedMenu";

const CourseDetailPostHeader = ({courseTitle}) => {
    return <div className={styles.wrapper}>
        <div className={styles.border}></div>
        <h2>{courseTitle}</h2>
    </div>
};

export default CourseDetailPostHeader;