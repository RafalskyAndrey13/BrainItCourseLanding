import React from 'react';
import styles from './Eventitem.module.css';

const EventItem = ({imageUrl, date, author, title, text}) => {
    return <div className={styles.wrapper}>
            <div className={styles.image}>
                <img src={imageUrl} alt={'Event Image'}/>
                <span>{date}</span>
            </div>
            <div className={styles.text}>
                <p className={styles.author}>{author}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.shortText}>{text}</p>
                <div className={styles.link}>
                    <a href={'#'}>Read more...</a>
                </div>
            </div>
    </div>
};

export default EventItem