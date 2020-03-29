import React from 'react';
import styles from './CategoriesItem.module.css'
import category from '../../assets/img/category.svg'

const CategoriesItem = ({title, numberOfCourses, imageUrl}) => {

    return <div className={styles.wrapper}>
        <img src={imageUrl} alt={"Category image"} className={styles.categoryImage}/>
        <div className={styles.info}>
            <p><img src={category} alt={"Category icon"}/>{numberOfCourses} programmes</p>
            <h3>{title}</h3>
        </div>
    </div>
};

export default CategoriesItem;