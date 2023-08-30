import { useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';

const TodoList = (props) => {

    const itemList = useSelector((state) =>
        state.todoList.todoList
    )

    console.log(itemList);

    return (
        <div className="todoList">
            <TodoGroup isDone={props.isDone} todoItemList={itemList}/>

            {!props.isDone &&  <TodoGenerator />}
           
        </div>
    );
};

export default TodoList;

