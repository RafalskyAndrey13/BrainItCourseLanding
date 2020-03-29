import React from 'react';
import styles from './NewPasswordLayout.module.css';
import {connect} from "react-redux";
import NewPasswordForm from "../NewPasswordForm/NewPasswordForm";

const ResetPasswordLayout = (props) => {

    return <div className={styles.wrapper}>
        <h2>Reset your password</h2>
        {props.isSuccessful ? <div className={styles.successful_wrapper}>
            <p>Password has been changed successfully.</p>
        </div> : <NewPasswordForm isSuccessful={props.isSuccessful}/>
        }
    </div>
};

export default connect((state) => ({isSuccessful: state.user.isSuccessful}), null)
(ResetPasswordLayout);