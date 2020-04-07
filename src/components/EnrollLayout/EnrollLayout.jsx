import React, {useEffect} from 'react';
import styles from './EnrollLayout.module.css';
import logo from "../../assets/img/logo.png";
import {NavLink} from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {redirect, resetState} from "../../redux/reducers/sign-reducer";
import EnrollForm from "../EnrollForm/EnrollForm";

const EnrollLayout = (props) => {
    useEffect(() => {
        props.resetState();
    }, []);

    if (!props.user){
        return <Redirect to={"/login"}/>
    }

    if (props.isSuccessful){
        props.redirect(3000);
    }

    if (props.isRedirecting){
        return <Redirect to={'/'}/>
    }

    return <div className={styles.wrapper}>
        <div className={styles.register}>
            <header>
                <img src={logo} alt={'Logo'}/>
            </header>
            <div className={styles.form}>
                {props.isLoading ? <Preloader/> : <EnrollForm course={props.match.params.course}/>}
            </div>
            {props.isSuccessful && <div className={styles.successful_wrapper}><p>You enrolled successfully</p></div>}
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading,
    isSuccessful: state.user.isSuccessful,
    user: state.user.user,
    isRedirecting: state.user.isRedirecting,
});

export default connect(mapStateToProps, {resetState, redirect})(EnrollLayout);