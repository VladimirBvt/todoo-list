import './todo-checkbox.css';

export const TodoCheckbox = () => {
    const getId = () => {
        return `check-${Math.random()}`;
    }
    const id = getId();

    return <div className='todoo-check-wrap'>
        <input type="checkbox" className='todoo-check' id={id}/>
        <label htmlFor={id}>1</label>
    </div>
}
