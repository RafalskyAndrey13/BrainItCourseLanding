import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./RegisterForm.module.css"
import {connect} from "react-redux";
import {registerUserWithEmail} from "../../redux/reducers/sign-reducer";
import {
    confirmPasswordMatch,
    emailMatchPattern,
    passwordMatch,
    passwordMatchPattern,
    requiredField
} from "../../utils/validators";

const Register = ({handleSubmit}) => {
    return <div>
        <form onSubmit={handleSubmit}>
            {createField('register_name', [requiredField], Input,
                {placeholder: 'Your name', type: 'text'})}
            {createField('register_surname', [requiredField], Input,
                {placeholder: 'Your surname', type: 'text'})}
            {createField('register_email', [requiredField, emailMatchPattern], Input,
                {placeholder: 'Your email', type: 'email'})}
            {createField('register_password', [requiredField, passwordMatch, passwordMatchPattern], Input,
                {placeholder: 'Your password', type: 'password'})}
            {createField('register_confirm', [requiredField, confirmPasswordMatch], Input,
                {placeholder: 'Confirm password', type: 'password'})}
            <button type="submit" className={styles.register_button}>Register</button>
        </form>
    </div>
};

const ReduxRegisterForm = reduxForm({form: 'register_form'})(Register);

const RegisterForm = (props) => {
    const handleSubmit = (formData) => {
        props.registerUserWithEmail(formData.register_email, formData.register_name,
            formData.register_surname, formData.register_password)
    };

    return <div>
        <ReduxRegisterForm onSubmit={handleSubmit}/>
        {props.errorMessage && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
};

export default connect((state) => ({errorMessage: state.user.errorMessage}), {registerUserWithEmail})(RegisterForm);

