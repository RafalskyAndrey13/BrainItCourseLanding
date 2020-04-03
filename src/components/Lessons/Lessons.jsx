import React from 'react';
import styles from './Lessons.module.css';
import Collapsible from "react-collapsible";

const Lessons = ({lessons}) => {
    return <div>
        <h2>Lessons</h2>
        {lessons.map((lesson, index) => {
            return <Collapsible className={styles.collapsible} openedClassName={styles.openedCollapsible}
                                triggerClassName={styles.trigger} triggerOpenedClassName={styles.trigger}
                                contentOuterClassName={styles.content}
                                key={index} trigger={lesson.title}>
                <ul>
                    {lesson.lessons.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </Collapsible>
        })}
    </div>
};

export default Lessons;