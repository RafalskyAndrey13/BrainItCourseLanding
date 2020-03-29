import React, {useEffect} from 'react';
import styles from './RegisterLayout.module.css';
import logo from "../../assets/img/logo.png";
import {NavLink} from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {resetState} from "../../redux/reducers/sign-reducer";

const RegisterLayout = (props) => {
    useEffect(() => {
        props.resetState();
    }, []);

    if (props.isSuccessful){
        return <Redirect to={"/"}/>
    }
    return <div className={styles.wrapper}>
        <div className={styles.register}>
            <header>
                <img src={logo} alt={'Logo'}/>
            </header>
            <div className={styles.form}>
                {props.isLoading ? <Preloader/> : <RegisterForm/>}
            </div>
            <footer>
                <span>Already have an account?</span>
                <NavLink to={"/login"}><a href={"#"}>Sign in</a></NavLink>
            </footer>
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    isSuccessful: state.user.isSuccessful,
});

export default connect(mapStateToProps, {resetState})(RegisterLayout);