import '../css/TodoItem.css';
import { useState } from "react";
import { Modal } from 'antd';
import { useTodos } from "../hooks/useTodos";


const TodoItem = (props) => {

    const { updateTodoTask, deleteTodoTask } = useTodos();
    const [updateValue, setUpdateValue] = useState("");
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

    const handleCheckboxChange = () => {  
        updateTodoTask(props.itemKey, props.todoItem, !props.isDone);
    };

    const deleteitem = () => {
        deleteTodoTask(props.itemKey);
    }

    const updateItem = () => {
        updateTodoTask(props.itemKey, updateValue);
        setIsUpdateModalVisible(false);
        setUpdateValue("");
    }

    const showDeleteModal = () => {
        setIsDeleteModalVisible(true);
    };

    const handleDeleteCancel = () => {
        setIsDeleteModalVisible(false);
    };

    const showUpdateModal = () => {
        setUpdateValue(props.todoItem);
        setIsUpdateModalVisible(true);
    };

    const handleUpdateCancel = () => {
        setIsUpdateModalVisible(false);
        setUpdateValue("");
    };

    return (
        <div className="todoItem">

            <span id="update" onClick={showUpdateModal}> ✐ </span>
            <Modal
                open={isUpdateModalVisible}
                onOk={updateItem}
                onCancel={handleUpdateCancel}
                className="update-todo-modal"
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
                    placeholder="Please input value here..."
                />
                </div>
            </Modal>
        
            <span id="selectItem" className={props.isDone ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 
            {props.todoItem} 
            </span> 

            <span id="delete" onClick={showDeleteModal}> ✖ </span>
            <Modal
                open={isDeleteModalVisible}
                onOk={deleteitem}
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
                        onClick={deleteitem}
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
