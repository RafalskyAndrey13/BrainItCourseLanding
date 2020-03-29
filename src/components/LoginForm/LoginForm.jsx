import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./LoginForm.module.css"
import {connect} from "react-redux";
import {loginUserWithEmail} from "../../redux/reducers/sign-reducer";
import {NavLink} from "react-router-dom";

const Login = ({handleSubmit}) => {
    return <div>
        <form onSubmit={handleSubmit} className={styles.login_form}>
            {createField('login_email', [], Input,
                {placeholder: 'Email', type: 'email'})}
            {createField('login_password', [], Input,
                {placeholder: 'Password', type: 'password'})}
            <NavLink to={'/reset'} className={styles.forgot_password}><a href={"#"}>Forgot password?</a></NavLink>
            <button type="submit" className={styles.login_button}>Login</button>
        </form>
    </div>
};

const ReduxLoginForm = reduxForm({form: 'login_form'})(Login);

const LoginForm = (props) => {
    console.log(props.errorMessage);
    const handleSubmit = (formData) => {
        props.loginUserWithEmail(formData.login_email, formData.login_password);
    };

    return <div>
        <ReduxLoginForm onSubmit={handleSubmit}/>
        {props.errorMessage && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
};

export default connect((state) => ({errorMessage: state.user.errorMessage}), {loginUserWithEmail})(LoginForm);

