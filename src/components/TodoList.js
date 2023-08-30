import { useDispatch } from 'react-redux';
import '../css/TodoList.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import { useEffect } from 'react';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from './todoListSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            const response = await todoApi.getTodoTask();
            dispatch(resetTodoTask(response.data));
        }
        fetchData();

    }, []);

    return (
        <div className="todoList">
            
            <TodoGroup />

            <TodoGenerator />
           
        </div>
   
    );
};

export default TodoList;

