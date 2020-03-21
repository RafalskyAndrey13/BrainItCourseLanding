import React from 'react';
import styles from './SectionHeader.module.css'

const SectionHeader = ({title, description}) => {
    return <div className={styles.wrapper}>
        <div className={styles.border}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
};

export default SectionHeader;