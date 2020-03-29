import React from 'react';
import styles from './CategoriesLayout.module.css';
import SectionHeader from "../SectionHeader/SectionHeader";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import {connect} from "react-redux";

const CategoriesLayout = (props) => {
    return <div className={styles.wrapper}>
        <SectionHeader title={"Udema Categories Courses"}
                       description={"Cum doctus civibus efficiantur in imperdiet deterruisset"}/>
        <div className={styles.categoriesList}>
            {props.categories.map((category, index) => <CategoriesItem key={index}
                                                                       title={category.title}
                                                                       numberOfCourses={category.numberOfProgramms}
                                                                        imageUrl={category.imageUrl}/>)}
        </div>
    </div>
};

const mapStateToProps = (state) => ({
    categories: state.categories.data,
});

export default connect(mapStateToProps, null)(CategoriesLayout);