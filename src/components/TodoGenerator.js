import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodoItem } from './todoListSlice';
import { v4 as uuidv4} from 'uuid';
import '../App.css';

const TodoGenerator = () => {

    const [item, setItem] = useState('');
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItem(event.target.value);
    }
    
    const result = {
        id: uuidv4(),
        text: item,
        done: false,
    };

    const addItems = () => {
        if(!item || item.trim() === "") {
            alert("No input, please add something!")
        } else{ 

            dispatch(addTodoItem(result));
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