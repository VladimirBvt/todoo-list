import './section-list.css';
import React, {FC, ReactChildren, ReactNode} from 'react';
import {Todoo} from '../todoo/todoo';
import {Arrays} from '../arrays/arrays';
import {Tasks} from '../../types/data';

type PropsSectionList = {
    tasks: Tasks;
    children?: ReactNode | ReactNode[];
}

export const SectionList = (props:PropsSectionList) => {
    const renderTasks = (tasks:Tasks) => {
        for (let i = 0; i < tasks.length; i ++) {
            <Todoo key={i} task={tasks[i]}/>
        }
    };

    return <section className='section-list'>
        <div className='date-sort'>
            <div className='date-sort__date'>8 мая 2022</div>
            <button className='date-sort__button'>
                <Arrays/>
                <span className='date-sort__button-text'>Сортировать по дате</span>
            </button>
        </div>
        {props.tasks.map(task => (<Todoo key={task.id} task={task}/>))}
        {/*{ props.tasks ? renderTasks(props.tasks) : '' }*/}

    </section>
}
