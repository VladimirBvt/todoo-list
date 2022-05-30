import './todoo.css';
import React, {useState} from 'react';
import {TaskEntity} from '../../types/data';
import {Modal} from "../modal/modal";

type PropsTodoo = {
    task: TaskEntity;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Todoo = (props:PropsTodoo) => {
    const [activeModal, setActiveModal] = useState(false);

    const getId = () => {
        return `check-${Math.random()}`;
    }
    const id = getId();

    return <div className='todoo' onClick={() => {
        setActiveModal(true);
        console.log(111);
    }}>
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
        <Modal active={activeModal} setActive={setActiveModal} task={props.task}/>
    </div>
}
