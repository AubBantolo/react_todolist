import { useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = (props) => {

    const itemList = useSelector((state) => state.todoList.todoList);

    const filteredItems = itemList.filter(item => props.isDone ? item.done : !item.done);

    return (
        <div className="todoList">
            
            <TodoGroup 
                isDone={props.isDone} 
                todoItemList={filteredItems}
            />

            {!props.isDone &&  <TodoGenerator />}
           
        </div>
    );
};

export default TodoList;

