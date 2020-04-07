import React from 'react';
import styles from './HeaderButton.module.css';
import {NavLink} from "react-router-dom";

const HeaderButton = ({text, link}) => {
    if (link){
        return <NavLink to={link}><button className={styles.header_button}>{text}</button></NavLink>
    }
    return <button className={styles.header_button}>{text}</button>
};

export default HeaderButton;