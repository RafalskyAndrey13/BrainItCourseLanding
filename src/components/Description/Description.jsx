import React from 'react';
import styles from './Description.module.css';

const Description = ({description}) => {
    return <div className={styles.wrapper}>
        <div className={styles.description}>
            <h3>Description</h3>
            <p>{description}</p>
        </div>
    </div>
};

export default Description;