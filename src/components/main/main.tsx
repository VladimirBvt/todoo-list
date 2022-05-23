import './main.css';
import {SectionFilter} from '../section-filter/section-filter';
import {FC} from 'react';
import {SectionList} from '../section-list/section-list';

export const Main:FC = () => {
    return <main className='main'>
        <SectionFilter/>
        <SectionList/>
    </main>
}
