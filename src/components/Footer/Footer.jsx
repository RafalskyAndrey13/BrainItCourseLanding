import React from 'react';
import styles from './Footer.module.css';
import logo from "../../assets/img/logo.png";
import {FaFacebook, FaGooglePlus, FaInstagram, FaPhone, FaPinterest, FaTwitter} from 'react-icons/fa';
import {MdEmail} from "react-icons/md";
import {connect} from "react-redux";

const Footer = (props) => {
    return <div className={styles.mainWrapper}>
        <div className={styles.wrapper}>
            <div className={styles.mainInfo}>
                <a href={"#"}><img src={logo} alt={"Logo"}/></a>
                <p className={styles.description}>Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id placerat tacimates definitionem sea,
                    prima quidam vim no. Duo nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis vis.</p>
                <div className={styles.socials}>
                    <p className={styles.title}>Follow us</p>
                    <ul>
                        <li><a href={"#"}><FaFacebook/></a></li>
                        <li><a href={"#"}><FaTwitter/></a></li>
                        <li><a href={"#"}><FaGooglePlus/></a></li>
                        <li><a href={"#"}><FaPinterest/></a></li>
                        <li><a href={"#"}><FaInstagram/></a></li>
                    </ul>

                </div>
            </div>
            <div className={styles.nav}>
                <p className={styles.title}>Useful links</p>
                <ul>
                    <li><a href={"#"}>Submission</a></li>
                    <li><a href={"#"}>About</a></li>
                    {!props.user && <li><a href={"#"}>Login</a></li>}
                    {!props.user && <li><a href={"#"}>Register</a></li>}
                    <li><a href={"#"}>News & Events</a></li>
                    <li><a href={"#"}>About</a></li>
                </ul>
            </div>
            <div className={styles.contacts}>
                <p className={styles.title}>Contact with us</p>
                <ul>
                    <li><a href={'#'}><span><FaPhone className={styles.icon}/>+34904234234</span></a></li>
                    <li><a href={'#'}><span><MdEmail className={styles.icon}/>email.example@gmail.com</span></a></li>
                </ul>
            </div>
        </div>
        <div className={styles.postFooter}>
            <div className={styles.links}>
                <a href={"#"}>Terms and conditions</a>
                <a href={"#"}>Privacy</a>
            </div>
            <span>@ 2020 Brain It</span>
        </div>
    </div>
};

export default connect((state) => ({user: state.user.user}), null)(Footer)