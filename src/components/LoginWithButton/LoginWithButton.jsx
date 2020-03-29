import React from 'react';
import styles from './LoginWithButton.module.css';
import {FaGoogle, FaFacebook} from "react-icons/fa";


const LoginWithButton = ({type, text, onClick}) => {
    const getImageByType = () => {
        switch (type) {
            case 'google':
                return <FaGoogle style={{color: 'white', fontSize: 18}}/>
            case 'facebook':
                return <FaFacebook style={{color: 'white', fontSize: 18}}/>

        }
    };

    const getBackgroundByType = () => {
        switch (type) {
            case 'google':
                return 'darkred';
            case 'facebook':
                return 'blue';
        }
    };

    return <button className={`${styles.button}`} style={{background: getBackgroundByType()}} onClick={onClick}>
        {getImageByType()}
        <span>{text}</span>
    </button>
};

export default LoginWithButton;