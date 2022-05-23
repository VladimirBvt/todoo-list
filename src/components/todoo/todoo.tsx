import './todoo.css';
import {FC} from 'react';

export const Todoo:FC = () => {
    const getId = () => {
        return `check-${Math.random()}`;
    }
    const id = getId();

    return <div className='todoo'>
        <div className='todoo-text'>
            <h3 className='todoo-title'>Название</h3>
            <p className='todoo-description'>Описание</p>
        </div>
        <div className='todoo-info'>
            <div className='todoo-check-wrap'>
                <input type="checkbox" className='todoo-check' id={id}/>
                <label htmlFor={id}>1</label>
            </div>
            <p className='todoo-date'>08.05.2022 00:10</p>
        </div>
    </div>
}
