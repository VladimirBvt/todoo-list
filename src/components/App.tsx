import {FC} from 'react';
import {Header} from './header/header';
import './App.css';
import {Main} from './main/main';
import {useState, useEffect} from 'react';
import {Modal} from "./modal/modal";

export const App: FC = () => {
    /*const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://todo.doczilla.pro/api/todos')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className='wrapper'>
                <Header/>
                <Main/>
            </div>
            /!*<ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>*!/
        );
    }
}*/
// второй вариант через прокси-сервер
   /* useEffect(() => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://todo.doczilla.pro/api/todos';
        fetch(proxyUrl + targetUrl)
            .then(result => console.log(result))
    }, []);*/


    const [modalActive, setModalActive] = useState(true);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://83062280-a129-472d-afa5-afc557173f5b.mock.pstmn.io')
            .then(result => result.json())
            .then((data) => console.log(data))
    }, []);

    return <>
        <div className='wrapper'>
            <Header/>
            <Main/>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    </>
}
