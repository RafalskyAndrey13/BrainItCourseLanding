import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/img/logo.png'
import HeaderButton from "../HeaderButton/HeaderButton";
import menu from '../../assets/img/menu.svg';
import close from '../../assets/img/close.svg';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../redux/reducers/sign-reducer";

const Header = (props) => {
    const handleScroll = () => {
        setIsTransparent(window.pageYOffset < 5)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);

    const [isTransparent, setIsTransparent] = useState(true);
    const [isMenuDisplayed, setMenuDisplayed] = useState(false);

    const onMenuButtonClicked = () => {
        setMenuDisplayed(!isMenuDisplayed);
    };

    return <div className={`${styles.wrapper} ${isTransparent ? '' : styles.background_wrapper}`}>
        <button className={styles.menuButton}><img src={isMenuDisplayed ? close : menu} alt={'menu button'}
                                                   onClick={onMenuButtonClicked}/></button>
        <a href={"#"}><img src={logo} alt={"Logo"}/></a>
        <ul className={`${styles.navigation} ${isMenuDisplayed ? styles.displayed : ''}`}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Courses</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Contacts</a></li>
            <li>
                {props.user ? <NavLink to={'/profile'}><a href='#'>Profile</a></NavLink> :
                    <NavLink to={'/login'}><a href='#'>Log in</a></NavLink> }
            </li>
            <li>
                {props.user ? <a href={"#"} onClick={props.signOut}>Log out</a>:
                    <NavLink to={'/register'}><a href='#'>Sign up</a></NavLink>}
            </li>
            <li><a href='#'><HeaderButton text={'Admission'} className={"button"} />
            </a></li>
        </ul>
    </div>
};

export default connect((state) => ({user: state.user.user}), {signOut})(Header)