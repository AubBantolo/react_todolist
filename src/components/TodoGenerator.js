import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoItem } from './todoListSlice';
import '../App.css';

const TodoGenerator = () => {

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
        if(!item || item.trim() === "") {
            alert("No input, please add something!")
        } else{ 
            dispatch(addTodoItem(result));
            setItemIndex(itemIndex + 1);
            setItem("");
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