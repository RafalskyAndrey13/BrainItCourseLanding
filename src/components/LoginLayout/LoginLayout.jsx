import React, {useEffect} from 'react';
import styles from './LoginLayout.module.css';
import logo from '../../assets/img/logo.png';
import LoginWithButton from "../LoginWithButton/LoginWithButton";
import LoginForm from "../LoginForm/LoginForm";
import {NavLink, Redirect} from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {loginUserWithFacebook, loginUserWithGoogle, resetState} from "../../redux/reducers/sign-reducer";

const LoginLayout = (props) => {
    useEffect(() => {
        props.resetState();
    }, []);

    if (props.isSuccessful){
        return <Redirect to={"/"}/>
    }

    return <div className={styles.wrapper}>
        <div className={styles.login}>
            <header>
                <img src={logo} alt={'Logo'}/>
            </header>
            <div className={styles.form}>
                {props.isLoading ? <Preloader/> : <><div className={styles.loginWithButtons}>
                        <LoginWithButton type={'google'} text={"Login With Google"} onClick={props.loginUserWithGoogle}/>
                        <LoginWithButton type={'facebook'} text={"Login With Facebook"} onClick={props.loginUserWithFacebook}/>
                    </div>
                    <span className={styles.label}>Or</span>
                    <LoginForm/></>}

            </div>
            <footer>
                <span>Now to Udema?</span>
                <NavLink to={"/register"}><a href={"#"}>Sign up</a></NavLink>
            </footer>
        </div>
    </div>
};

export default connect(state => ({isLoading: state.user.isLoading, isSuccessful: state.user.isSuccessful}),
    {resetState, loginUserWithGoogle, loginUserWithFacebook})(LoginLayout);