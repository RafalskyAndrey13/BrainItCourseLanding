import React from 'react';
import styles from './Preloader.module.css';
import preloader from '../../assets/img/preloader.svg';

const Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={preloader} alt={"Preloader"}/>
        <p>Please, wait...</p>
    </div>
};

export default Preloader;