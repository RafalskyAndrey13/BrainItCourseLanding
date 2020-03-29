import React from 'react';
import styles from './NewPasswordLayout.module.css';
import {connect} from "react-redux";
import NewPasswordForm from "../NewPasswordForm/NewPasswordForm";
import {redirect} from "../../redux/reducers/sign-reducer";
import {Redirect} from "react-router";

const ResetPasswordLayout = (props) => {

    if (props.isSuccessful){
        props.redirect(3000);
    }

    if (props.isRedirecting){
        return <Redirect to={"/login"}/>
    }

    return <div className={styles.wrapper}>
        <h2>Reset your password</h2>
        {props.isSuccessful ? <div className={styles.successful_wrapper}>
            <p>Password has been changed successfully.</p>
        </div> : <NewPasswordForm isSuccessful={props.isSuccessful}/>
        }
    </div>
};

export default connect((state) => ({isSuccessful: state.user.isSuccessful, isRedirecting: state.user.isRedirecting}), {redirect})
(ResetPasswordLayout);