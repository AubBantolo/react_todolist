import { useDispatch } from 'react-redux';
import '../App.css';
import React, { useState } from "react";
import { addTodoItem, doneTodoItem, deleteTodo } from './todoListSlice';

const TodoItem = (props) => {

    const [isChecked, setIsChecked] = useState(true);
    const dispatch = useDispatch();

    // const result = {
    //     id: props.itemKey,
    //     text: props.item,
    //     done: isChecked,
    // };

    // const checkKey = () => {
    //     if(isChecked){
    //         //console.log(JSON.stringify(result));
    //         dispatch(addTodoItem(result));
    //     }
    //     else {
    //         //console.log(props.itemKey + " " + props.item + " Done: " + isChecked);
    //     }
    // }

    const handleCheckboxChange = () => {
        // setIsChecked(!isChecked);
        dispatch(doneTodoItem(props.itemKey));
    };

    const deleteItem = () => {
        if(window.confirm("Do you want to delete this?")){
            dispatch(deleteTodo(props.itemKey));
            //props.deleteItem();
        }
        //console.log(props.itemKey + " " + props.item + " Done: " + isChecked);
    };

    return (
        <div className="todoItem">

        <span id="selectItem" className={!isChecked ? "strikethrough" : ""}  onClick={handleCheckboxChange}> 
            {props.todoItem} 

            <span id="delete" onClick={deleteItem}> ✖ </span>
        </span>

        </div>
    );
}

export default TodoItem;
