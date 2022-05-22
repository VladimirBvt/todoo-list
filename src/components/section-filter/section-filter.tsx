import './section-filter.css';
import {FC} from 'react';
import {Button} from '../button/button';
import {Calendar} from '../calendar/calendar';

export const SectionFilter:FC = () => {
    return <section className='section-filter'>
        <Button text='Сегодня'/>
        <Button text='На неделю'/>
        <Calendar/>
        <div>
            <input type='checkbox' id='unfulfilled'/>
            <label htmlFor='unfulfilled'>Только невыполненные</label>
        </div>

    </section>
}
