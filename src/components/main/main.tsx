import './main.css';
import {SectionFilter} from '../section-filter/section-filter';
import {SectionList} from '../section-list/section-list';
import {Tasks} from '../../types/data';

type PropsMain = {
    tasks: Tasks;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main = (props:PropsMain) => {
    return <main className='main'>
        <SectionFilter/>
        <SectionList tasks={props.tasks} active={props.active} setActive={props.setActive}/>
    </main>
}
