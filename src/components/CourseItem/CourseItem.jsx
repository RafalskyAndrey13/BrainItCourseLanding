import React from "react";
import styles from './CourseItem.module.css'
import like from '../../assets/img/like_icon.svg'
import gray_star from '../../assets/img/gray_star.svg'
import yellow_star from '../../assets/img/yellow_star.svg'
import timer from '../../assets/img/timer.svg'
import thumb from '../../assets/img/thumb.svg'
import EnrollButton from "../EnrollButton/EnrollButton";

const CourseItem = ({imgUrl, price, category, title, description, rate, votingNumber, duration, likes}) => {
    const renderRateStars = () => {
        let stars = [];
        for (let i = 0; i < 5; i++){
            stars.push(i < rate ? yellow_star : gray_star)
        }
        return stars;
    };

    return <div className={styles.wrapper}>
        <header>
            <span className={styles.price}>${price}</span>
            <button className={styles.like_button}><img src={like} alt={"like button"}/></button>
            <button className={styles.preview_button}>Preview course</button>
            <img src={imgUrl} alt={title} className={styles.course_img}/>
        </header>
        <section className={styles.main}>
            <p className={styles.category}>{category}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.rate}>
                {renderRateStars().map(star => <img src={star}/>)}
                <span className={styles.votes}>({votingNumber})</span>
            </div>
        </section>
        <footer>
            <div className={styles.info}>
                <div className={styles.info_item}>
                    <img src={timer} alt="Duration"/>
                    <span>{duration}</span>
                </div>
                <div className={styles.info_item}>
                    <img src={thumb} alt="Thumb"/>
                    <span>{likes}</span>
                </div>
            </div>
            <EnrollButton course={title}/>
        </footer>

    </div>

};

export default CourseItem;