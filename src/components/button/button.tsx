import './button.css';
import {ButtonProps} from '../../types/data';

export const Button = (props:ButtonProps) => {
    return <button className='button'>
        {props.text}
    </button>
}
