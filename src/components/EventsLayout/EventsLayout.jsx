import React from 'react';
import styles from './EventsLayout.module.css';
import SectionHeader from "../SectionHeader/SectionHeader";
import EventItem from "../EventItem/EventItem";
import event from '../../assets/img/event.jpg'
import HeaderButton from "../HeaderButton/HeaderButton";

const EventLayout = () => {
    return <div className={styles.wrapper}>
        <SectionHeader title={'News and Events'} description={'Cum doctus civibus efficiantur in imperdiet deterruisset'}/>
        <div className={styles.eventList}>
            <EventItem imageUrl={event} date={'28 Dec'} title={'Title of the event'} text={'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. Eaque illum molestias nostrum odio officia quibusdam quos. Assumenda, ' +
            'consectetur dolores earum fugiat maxime molestias provident quae saepe ut vitae voluptas voluptate!'}
                       author={'Andrey Rafalsky'}/>
            <EventItem imageUrl={event} date={'28 Dec'} title={'Title of the event'} text={'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. Eaque illum molestias nostrum odio officia quibusdam quos. Assumenda, ' +
            'consectetur dolores earum fugiat maxime molestias provident quae saepe ut vitae voluptas voluptate!'}
                       author={'Andrey Rafalsky'}/>
            <EventItem imageUrl={event} date={'28 Dec'} title={'Title of the event'} text={'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. Eaque illum molestias nostrum odio officia quibusdam quos. Assumenda, ' +
            'consectetur dolores earum fugiat maxime molestias provident quae saepe ut vitae voluptas voluptate!'}
                       author={'Andrey Rafalsky'}/>
            <EventItem imageUrl={event} date={'28 Dec'} title={'Title of the event'} text={'Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit. Eaque illum molestias nostrum odio officia quibusdam quos. Assumenda, ' +
            'consectetur dolores earum fugiat maxime molestias provident quae saepe ut vitae voluptas voluptate!'}
                       author={'Andrey Rafalsky'}/>
        </div>
        <div className={styles.controls}>
            <HeaderButton text={"View all news"}/>
        </div>
    </div>
};

export default EventLayout;