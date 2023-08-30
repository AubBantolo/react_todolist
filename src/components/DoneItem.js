import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../App.css';
import * as todoApi from "../api/todoApi"; 
import { resetTodoTask } from './todoListSlice';
import { useState } from "react";
import { Modal } from 'antd';


const DoneItem = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    const onClickTodoItem = () => {
        navigate("/done/" + props.itemKey);
    };

    const deleteItem = async () => {
        await todoApi.deleteTodoTask(props.itemKey);
        const response = await todoApi.getTodoTask();
        dispatch(resetTodoTask(response.data));
    };

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };


    return (
            <div className="todoItem">
                {/* <span id="selectItem" className={props.isDone ? "strikethrough" : ""} onClick={onClickTodoItem}>{props.todoItem}</span> */}
            
                <span id="selectItem" className={props.isDone ? "strikethrough" : ""}> 
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
};

export default DoneItem;