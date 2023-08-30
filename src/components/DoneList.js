import { useNavigate } from "react-router-dom";
import DoneGroup from "./DoneGroup";
import { useSelector } from 'react-redux';

const DoneList = (props) => {

    const itemList = useSelector((state) => state.todoList.todoList);

    const filteredItems = itemList.filter(item => props.isDone ? !item.done : item.done);

    return (

        <div className="doneList">
            <h2>Done List</h2>
                <DoneGroup isDone={props.isDone} todoList={filteredItems}/>

              
        </div>
    );
}

export default DoneList;