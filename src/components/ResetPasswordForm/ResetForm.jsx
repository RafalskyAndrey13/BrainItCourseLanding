import React, {useEffect} from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./ResetForm.module.css"
import {connect} from "react-redux";
import {emailMatchPattern, requiredField} from "../../utils/validators";
import {resetPasswordWithEmail, resetState} from "../../redux/reducers/sign-reducer";
import Preloader from "../Preloader/Preloader";

const Reset = ({handleSubmit}) => {
    return <div>
        <p className={styles.label}>Enter your user account's email address and we will send you a password reset link.</p>
        <form onSubmit={handleSubmit}>
            {createField('reset_email', [requiredField, emailMatchPattern], Input,
                {placeholder: 'Enter your email address', type: 'email'})}
            <button type="submit" className={styles.reset_button}>Send password reset email</button>
        </form>
    </div>
};

const ReduxResetForm = reduxForm({form: 'reset_form'})(Reset);

const ResetForm = (props) => {
    useEffect(() => {
        props.resetState();
    }, []);

    const handleSubmit = (formData) => {
        props.resetPasswordWithEmail(formData.reset_email);
    };

    if (props.isLoading){
        return <Preloader/>
    }

    return <div className={styles.wrapper}>
        <ReduxResetForm onSubmit={handleSubmit}/>
        {props.errorMessage && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
};

export default connect((state) => ({isLoading: state.user.isLoading, errorMessage: state.user.errorMessage}),
    {resetPasswordWithEmail, resetState})(ResetForm);

