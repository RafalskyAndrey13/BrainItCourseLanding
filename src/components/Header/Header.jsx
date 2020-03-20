import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
    const handleScroll = () => {
        setIsTransparent(window.pageYOffset < 5)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    const [isTransparent, setIsTransparent] = useState(true);

    return <div className={`${styles.wrapper} ${isTransparent ? '' : styles.background_wrapper}`}>
        <a href={"#"}><img src={logo} alt={"Logo"} className={styles.logo}/></a>
        <ul className={styles.navigation}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Contacts</a></li>
        </ul>
        <HeaderButton text={'Admission'}/>
    </div>
}

export default Header