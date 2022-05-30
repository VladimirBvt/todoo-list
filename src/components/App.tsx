import {FC} from 'react';
import {Header} from './header/header';
import './App.css';
import {Main} from './main/main';
import {useState, useEffect} from 'react';
import {Modal} from './modal/modal';
import {mockTodoos} from '../mocks/mocks';

export const App: FC = () => {
    const [modalActive, setModalActive] = useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://todo.doczilla.pro/api/todos')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if(error) {
        console.log(mockTodoos);
    }

    return <>
        <div className='wrapper'>
            <Header/>
            <Main tasks={mockTodoos}/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    </>
}
