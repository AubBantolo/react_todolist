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
                <span id="selectItem" className={props.isDone ? "strikethrough" : ""} onClick={onClickTodoItem}> 
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
};

export default DoneItem;