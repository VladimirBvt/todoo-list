import './header.css'
import {FC} from 'react';
import {Icon} from '../icon/icon';
import {SearchIcon} from '../search-icon/search-icon';

export const Header:FC = () => {
    return <header className='header'>
        <div className='input-wrap'>
            <input type='search' className='search' placeholder='Поиск'/>
            <SearchIcon/>
        </div>
        <Icon/>
    </header>
}
