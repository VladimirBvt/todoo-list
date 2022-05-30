import './todoo.css';
import {FC} from 'react';
import {TaskEntity} from '../../types/data';

type PropsTodoo = {
    task: TaskEntity;
}

export const Todoo = (props:PropsTodoo) => {
    const getId = () => {
        return `check-${Math.random()}`;
    }
    const id = getId();

    return <div className='todoo'>
        <div className='todoo-text'>
            <h3 className='todoo-title'>{props.task.name}</h3>
            <p className='todoo-description'>{props.task.shortDesc}</p>
        </div>
        <div className='todoo-info'>
            <div className='todoo-check-wrap'>
                <input type="checkbox" className='todoo-check' id={id}/>
                <label htmlFor={id}>1</label>
            </div>
            <p className='todoo-date'>{props.task.date}</p>
        </div>
    </div>
}
