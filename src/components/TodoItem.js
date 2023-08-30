import { useDispatch } from 'react-redux';
import '../App.css';
import { doneTodoItem, deleteTodo } from './todoListSlice';

const TodoItem = (props) => {

    const dispatch = useDispatch();

    const handleCheckboxChange = () => {  
        dispatch(doneTodoItem(props.itemKey));
    };

    const deleteItem = () => {
        if(window.confirm("Do you want to delete this?")){
            dispatch(deleteTodo(props.itemKey));   
        }
    };

    return (
        <div className="todoItem">

            <span id="selectItem" className={props.isDone ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 

            {props.todoItem} 

            <span id="delete" onClick={deleteItem}> ✖ </span>
        </span>

        </div>
    );
}

export default TodoItem;
