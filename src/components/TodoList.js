import { useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = () => {

    const itemList = useSelector((state) =>
        state.todoList.todoList
    )

    return (
        <div className="todoList">
            <TodoGroup todoItemList={itemList}/>

            <TodoGenerator />
        </div>
    );
};

export default TodoList;

