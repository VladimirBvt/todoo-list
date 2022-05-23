import {FC} from 'react';
import {Header} from './header/header';
import './App.css';
import {Main} from './main/main';
//import {useState, useEffect} from 'react';

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

    return <>
        <div className='wrapper'>
            <Header/>
            <Main/>
        </div>
    </>
}
