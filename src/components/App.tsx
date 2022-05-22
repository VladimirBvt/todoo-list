import {FC} from 'react';
import {Header} from './header/header';
import './App.css';
import {Main} from './main/main';

export const App: FC = () => {
    return <>
        <div className='wrapper'>
            <Header/>
            <Main/>
        </div>
    </>
}
