import { useDispatch } from 'react-redux';
import '../App.css';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from './todoListSlice';
import { useState } from "react";
import { Modal } from 'antd';

const TodoItem = (props) => {

    const dispatch = useDispatch();
    const [updateValue, setUpdateValue] = useState("");
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

    const handleCheckboxChange = async () => {  
        await todoApi.updateTodoTask(props.itemKey, {done: !props.isDone})
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
    };

    const deleteItem = async () => {
        await todoApi.deleteTodoTask(props.itemKey);
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
    };

    const updateItem = async () => {
        await todoApi.updateTodoTask(props.itemKey, { text: updateValue });
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
        setIsUpdateModalVisible(false);
        setUpdateValue("");
    };

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const showUpdateModal = () => {
        setIsUpdateModalVisible(true);
    };

    const handleUpdateCancel = () => {
        setIsUpdateModalVisible(false);
    };


    return (
        <div className="todoItem">

            <span id="update" onClick={showUpdateModal}> ✐ </span>

            <Modal
                title="Update Todo Item"
                open={isUpdateModalVisible}
                onOk={updateItem}
                onCancel={handleUpdateCancel}
            >
                <p>Change Todo?</p>
                <input
                    value={updateValue}
                    onChange={(input) => setUpdateValue(input.target.value)}
                    placeholder="Please input here.."
                />
            </Modal>
        
            <span id="selectItem" className={props.isDone ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 
            {props.todoItem} 
            </span> 

            <span id="delete" onClick={showDeleteModal}> ✖ </span>

            <Modal
                title="Delete Todo Item"
                open={isDeleteModalVisible}
                onOk={deleteItem}
                onCancel={handleDeleteCancel}
            >
                <p>Do you want to delete this?</p>  
            </Modal>

        </div>
    );
}

export default TodoItem;
