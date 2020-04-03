import React from 'react';
import styles from './WhatLearn.module.css';
import check from '../../assets/img/check.svg';

const WhatLearn = ({lessons}) => {
    return <div>
        <h2>What will you learn?</h2>
        {lessons.map((lesson, index) => {
            return <div className={styles.wrapper} key={index}>
                <img src={check} alt={"Check icon"}/>
                <div>
                    <h3>{lesson.header}</h3>
                    <p>{lesson.text}</p>
                </div>
            </div>
        })}
    </div>
};

export default WhatLearn;