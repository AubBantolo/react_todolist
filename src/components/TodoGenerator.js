import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoItem, doneTodoItem, deleteTodo } from './todoListSlice';
import '../App.css';


const TodoGenerator = (props) => {

    const [item, setItem] = useState('');
    const [itemIndex, setItemIndex] = useState(0);
    const dispatch = useDispatch();


    const onItemChange = (event) => {
        setItem(event.target.value);
    }

    const result = {
        id: itemIndex + Math.random(),
        text: item,
        done: false,
    };

    const addItems = () => {
        if(!item.match(/[a-z]/i)) {
            alert("No input, please add something!")
        } else{ 
            dispatch(addTodoItem(result));
            setItemIndex(itemIndex + 1);
        }
    }

    return (
        <div className="todoGenerator">
            <input placeholder="Anything in mind?" value={item} onChange={onItemChange} />
            <br/> 
            <button onClick={addItems}>ADD</button>
        </div>
    )
    
};


export default TodoGenerator;