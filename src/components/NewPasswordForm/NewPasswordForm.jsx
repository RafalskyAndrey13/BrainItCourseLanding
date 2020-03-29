import React, {useEffect} from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./NewPasswordForm.module.css"
import {connect} from "react-redux";
import {confirmPasswordMatch, passwordMatch, passwordMatchPattern, requiredField} from "../../utils/validators";
import {confirmPasswordReset, resetState} from "../../redux/reducers/sign-reducer";
import Preloader from "../Preloader/Preloader";

const NewPassword = ({handleSubmit}) => {
    return <div>
        <p className={styles.label}>Enter your new password</p>
        <form onSubmit={handleSubmit}>
            {createField('register_password', [requiredField, passwordMatch, passwordMatchPattern], Input,
            {placeholder: 'Enter new password', type: 'password'})}
            {createField('register_confirm', [requiredField, confirmPasswordMatch], Input,
                {placeholder: 'Confirm new password', type: 'password'})}
            <button type="submit" className={styles.reset_button}>Change password</button>
        </form>
    </div>
};

const ReduxNewPasswordForm = reduxForm({form: 'new_password_form'})(NewPassword);

const NewPasswordForm = (props) => {
    useEffect(() => {
        props.resetState();
    }, []);

    const handleSubmit = (formData) => {
        props.confirmPasswordReset(new URL(window.location.href).searchParams.get("oobCode"), formData.register_password)
    };

    if (props.isLoading){
        return <Preloader/>
    }

    return <div className={styles.wrapper}>
        <ReduxNewPasswordForm onSubmit={handleSubmit}/>
        {props.errorMessage && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
};

export default connect((state) => ({isLoading: state.user.isLoading, errorMessage: state.user.errorMessage}),
    {resetState, confirmPasswordReset})(NewPasswordForm);

