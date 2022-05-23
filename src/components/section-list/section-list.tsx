import './section-list.css';
import {FC} from 'react';
import {Todoo} from '../todoo/todoo';
import {Arrays} from "../arrays/arrays";

export const SectionList:FC = () => {
    return <section className='section-list'>
        <div className='date-sort'>
            <div className='date-sort__date'>8 мая 2022</div>
            <button className='date-sort__button'>
                <Arrays/>
                <span className='date-sort__button-text'>Сортировать по дате</span>
            </button>
        </div>
        <Todoo/>
        <Todoo/>
        <Todoo/>
        <Todoo/>
    </section>
}
