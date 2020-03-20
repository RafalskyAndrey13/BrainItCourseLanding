import React from 'react';
import styles from './HeaderButton.module.css';

const HeaderButton = ({text}) => {
    return <button className={styles.header_button}>{text}</button>
};

export default HeaderButton;