import DoneGroup from "./DoneGroup";
import { useDispatch } from 'react-redux';
import '../App.css';
import '../css/DoneList.css';
import { useEffect } from 'react';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from './todoListSlice';

const DoneList = () => {

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