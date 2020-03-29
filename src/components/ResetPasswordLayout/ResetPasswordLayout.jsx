import React from 'react';
import styles from './ResetPasswordLayout.module.css';
import ResetForm from "../ResetPasswordForm/ResetForm";
import {connect} from "react-redux";

const ResetPasswordLayout = (props) => {
    return <div className={styles.wrapper}>
        <h2>Reset your password</h2>
        {props.isSuccessful ? <div className={styles.successful_wrapper}>
            <p>Email with further instructions has been sent successfully. Please, check you email.</p>
        </div> : <ResetForm isSuccessful={props.isSuccessful}/>
        }
    </div>
};

export default connect((state) => ({isSuccessful: state.user.isSuccessful}), null)
(ResetPasswordLayout);