import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormControls/FormControls";
import styles from "./SearchForm.module.css"

const Search = ({handleSubmit, error}) => {
    return <div>
        <form onSubmit={handleSubmit} className={styles.search_form}>
            {createField('search_course', [], Input,
                {placeholder: 'Ex. Architecture, Specialization...', type: 'search'})}
            <button type="submit">Search</button>
        </form>
        {error && <div>
            <p>{error}. Please, try again</p>
        </div>}
    </div>
};

const ReduxSearch = reduxForm({form: 'search_course_form'})(Search);

const SearchForm = () => {
    const handleSubmit = (formData) => {

    };

    return <ReduxSearch onSubmit={handleSubmit}/>
};

export default SearchForm;

