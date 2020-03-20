import React from 'react';
import styles from './PostHeader.module.css'
import SearchForm from "../SearchForm/SearchForm";

const PostHeader = () => {
    return <div className={styles.wrapper}>
        <div>
            <h2>What would you learn?</h2>
            <p>Increase your expertise in business, technology and personal development</p>
        </div>
        <SearchForm/>
    </div>
};

export default PostHeader;