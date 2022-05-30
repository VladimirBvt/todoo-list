import './modal.css';
import {FC, useState} from 'react';
import {TodoCheckbox} from '../todo-checkbox/todo-checkbox';
import {TaskEntity} from '../../types/data';

interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    task: TaskEntity;
}

export const Modal: FC <ModalProps> = (props:ModalProps) => {
    const [active, setActive] = useState(props.active);

    return <>
         <div className={active ? 'modal__overlay active' : 'modal__overlay'}>
         </div>
         <div className={active ? 'modal active' : 'modal'}>
            <div className='modal__content'>
                <header className='modal__header'>
                    <div className='modal__info'>
                        <h1>Название{props.task.name}</h1>
                        <div>08.05.2022 00:10</div>
                    </div>
                    <TodoCheckbox/>
                </header>
                <div className='modal__full-description'>
                    Полное описание
                </div>
                <button className='modal__button' onClick={() => setActive(!active)}>Готово</button>
            </div>
        </div>
    </>

}
