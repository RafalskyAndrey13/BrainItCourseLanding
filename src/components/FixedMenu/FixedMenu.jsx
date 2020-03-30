import React from 'react';
import styles from './FixedMenu.module.css';

const FixedMenu = () => {
    return <div className={styles.wrapper}>
        <ul>
            <li><a href={"#description"}>Description</a></li>
            <li><a href={"#lessons"}>Lessons</a></li>
            <li><a href={"#reviews"}>Reviews</a></li>
        </ul>
    </div>
};

export default FixedMenu;