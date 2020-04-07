import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./EnrollForm.module.css"
import {connect} from "react-redux";
import {enroll, registerUserWithEmail} from "../../redux/reducers/sign-reducer";
import {phoneMatchPattern, requiredField} from "../../utils/validators";

const Enroll = ({handleSubmit, name, surname}) => {
    return <div>
        <p>{name} {surname}, enter your phone number and our manager will call you as soon as possible</p>
        <form onSubmit={handleSubmit}>
            {createField('enroll_phone', [requiredField, phoneMatchPattern], Input,
                {placeholder: 'Your phone', type: 'tel'})}
            <button type="submit" className={styles.enroll_button}>Enroll</button>
        </form>
    </div>
};

const ReduxEnrollForm = reduxForm({form: 'enroll_form'})(Enroll);

const RegisterForm = (props) => {
    let name;
    let surname;

    if (props.user.signed === 'email'){
        name = props.user.firstName;
        surname = props.user.lastName;
    }

    const handleSubmit = (formData) => {
        props.enroll(name, surname, formData.enroll_phone, props.course);
    };

    return <div>
        <ReduxEnrollForm onSubmit={handleSubmit} name={name} surname={surname}/>
        {props.errorMessage && <p className={styles.error}>{props.errorMessage}</p>}
    </div>
};

export default connect((state) => ({errorMessage: state.user.errorMessage, user: state.user.user}), {enroll})(RegisterForm);

