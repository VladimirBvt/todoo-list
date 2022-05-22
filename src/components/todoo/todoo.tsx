import './todoo.css';
import {FC} from 'react';

export const Todoo:FC = () => {
    return <div className='todoo'>
        <div className='todoo-text'>
            <h3 className='todoo-title'>Название</h3>
            <p className='todoo-description'>Описание</p>
        </div>
        <div className='todoo-info'>
            <div>
                <input type="checkbox" className='todoo-check' id='check'/>
                <label htmlFor='check'>1</label>
            </div>
            <p className='todoo-date'>08.05.2022 00:10</p>
        </div>
    </div>
}
