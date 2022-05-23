import './calendar.css';
import {FC} from 'react';

export const Calendar:FC = () => {
    return <div className='calendar'>
        <div>
            <label>Начальная дата</label>
            <input type='date'/>
        </div>
        <div className='date-name'>
            <label>Конечная дата</label>
            <input type='date'/>
        </div>
    </div>
}
