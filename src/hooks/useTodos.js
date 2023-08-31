import { useDispatch } from 'react-redux';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from '../components/todoListSlice';

export const useTodos = () => {
    const dispatch = useDispatch();

    async function loadTodos() {
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
    }

    const addTodoTask = async (id, updatedText, updatedDone) => {
        await todoApi.updateTodoTask(id, {text: updatedText, done: updatedDone})
        loadTodos();
    }

    const deleteTodoTask = async (id) => {
        await todoApi.deleteTodoTask(id);
        loadTodos();
    };

    const updateTodoTask = async (id, updatedText, updatedDone) => {
        await todoApi.updateTodoTask(id, { text: updatedText, done: updatedDone});
        loadTodos();
    };


    return {
        loadTodos,
        addTodoTask,
        deleteTodoTask,
        updateTodoTask,
    };
};