import { useNavigate } from "react-router-dom";
import DoneGroup from "./DoneGroup";
import { useDispatch } from 'react-redux';
import '../App.css';
import { useEffect } from 'react';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from './todoListSlice';

const DoneList = (props) => {

    // const itemList = useSelector((state) => state.todoList.todoList);

    // const filteredItems = itemList.filter(item => props.isDone ? !item.done : item.done);

    const dispatch = useDispatch();
        useEffect(() => {
        const fetchData = async () => {
            const response = await todoApi.getTodoTask();
            dispatch(resetTodoTask(response.data));
        }
        fetchData();

    }, []);

    return (

        <div className="doneList">
            <h3>Done List</h3>
                <DoneGroup />
        </div>
    );
}

export default DoneList;