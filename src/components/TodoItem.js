import { useDispatch } from 'react-redux';
import '../css/TodoItem.css';
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

    const modalStyle = {
        color: 'black'
    };


    return (
        <div className="todoItem">

            <span id="update" onClick={showUpdateModal}> ✐ </span>

            <Modal
                open={isUpdateModalVisible}
                onOk={updateItem}
                onCancel={handleUpdateCancel}
                className="update-todo-modal"
                style={modalStyle}
                footer={[
                    <button key="back" 
                        style={{ 
                            cursor: 'pointer',
                            background: 'white', 
                            outline: 'inherit',
                            fontSize: '16px',
                            padding: '5px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            textAlign: 'center',
                            color: 'black',
                            marginLeft: '20px',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)'
                        }}
                        onClick={handleUpdateCancel}>
                        Cancel
                    </button>,

                    <button
                        key="submit"
                        style={{ 
                            cursor: 'pointer',
                            background: 'black', 
                            outline: 'inherit',
                            fontSize: '16px',
                            padding: '5px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            textAlign: 'center',
                            color: 'white',
                            marginLeft: '20px',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)'
                        }}
                        onClick={updateItem}
                    >
                        Update
                    </button>,
                ]}
            >
                <div className="modal-content">
                <p>Change Todo?</p>
                <input
                    value={updateValue}
                    onChange={(input) => setUpdateValue(input.target.value)}
                    placeholder="Please input here.."
                />
                </div>
            </Modal>
        
            <span id="selectItem" className={props.isDone ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 
            {props.todoItem} 
            </span> 

            <span id="delete" onClick={showDeleteModal}> ✖ </span>
            <Modal
                open={isDeleteModalVisible}
                onOk={deleteItem}
                onCancel={handleDeleteCancel}
                footer={[
                    <button key="back" 
                        style={{ 
                            cursor: 'pointer',
                            background: 'white', 
                            outline: 'inherit',
                            fontSize: '16px',
                            padding: '5px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            textAlign: 'center',
                            color: 'black',
                            marginLeft: '20px',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)'
                        }}
                        onClick={handleDeleteCancel}>
                        Cancel
                    </button>,

                    <button
                        key="submit"
                        style={{ 
                            cursor: 'pointer',
                            background: 'black', 
                            outline: 'inherit',
                            fontSize: '16px',
                            padding: '5px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            textAlign: 'center',
                            color: 'white',
                            marginLeft: '20px',
                            border: 'none',
                            borderRadius: '25px',
                            boxShadow: '0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)'
                        }}
                        onClick={deleteItem}
                    >
                        Delete
                    </button>,
                ]}
            >
                <div className="modal-delete">
                    <p>Do you want to delete this?</p> 
                </div>
                 
            </Modal>

        </div>
    );
}

export default TodoItem;
