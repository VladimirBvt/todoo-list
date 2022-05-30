import './main.css';
import {SectionFilter} from '../section-filter/section-filter';
import {FC} from 'react';
import {SectionList} from '../section-list/section-list';
import {Tasks} from '../../types/data';

type PropsMain = {
    tasks: Tasks;
}

export const Main = (props:PropsMain) => {
    return <main className='main'>
        <SectionFilter/>
        <SectionList tasks={props.tasks}/>
    </main>
}
