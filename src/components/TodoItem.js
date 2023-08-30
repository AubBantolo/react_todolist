import { useDispatch } from 'react-redux';
import '../App.css';
import * as todoApi from "../api/todoApi"; 
import { doneTodoItem, deleteTodo, resetTodoTask } from './todoListSlice';

const TodoItem = (props) => {

    const dispatch = useDispatch();

    const handleCheckboxChange = async () => {  

        await todoApi.updateTodoTask(props.itemKey, {done: !props.isDone})
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
    };

    const deleteItem = async () => {

        if(window.confirm("Do you want to delete this?")){
            // dispatch(deleteTodo(props.itemKey));   

            await todoApi.deleteTodoTask(props.itemKey);
            const response = await todoApi.getTodoTask();
            dispatch(resetTodoTask(response.data));
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
