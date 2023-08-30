import { useState } from "react";
import { useDispatch } from 'react-redux';
import { resetTodoTask } from './todoListSlice';
import { v4 as uuidv4} from 'uuid';
import * as todoApi from "../api/todoApi"; 
import '../css/TodoGenerator.css';

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

    const addItems = async () => {
        if(!item || item.trim() === "") {
            alert("No input, please add something!")
        } else { 

            await todoApi.addTodoTask(result);
            const response = await todoApi.getTodoTask();
            dispatch(resetTodoTask(response.data));
            
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
