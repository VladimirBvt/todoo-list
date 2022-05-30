import './section-list.css';
import React, {ReactNode} from 'react';
import {Todoo} from '../todoo/todoo';
import {Arrays} from '../arrays/arrays';
import {Tasks} from '../../types/data';

type PropsSectionList = {
    tasks: Tasks;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children?: ReactNode | ReactNode[];
}

export const SectionList = (props:PropsSectionList) => {

    return <section className='section-list'>
        <div className='date-sort'>
            <div className='date-sort__date'>8 мая 2022</div>
            <button className='date-sort__button'>
                <Arrays/>
                <span className='date-sort__button-text'>Сортировать по дате</span>
            </button>
        </div>

        {props.tasks.map(task => (<Todoo key={task.id} task={task} active={props.active} setActive={props.setActive}/>))}

    </section>
}
