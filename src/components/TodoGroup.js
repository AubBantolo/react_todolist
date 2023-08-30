import TodoItem from './TodoItem';
import '../App.css';
import { useSelector } from 'react-redux';

const TodoGroup = (props) => {

    const toDoItems = useSelector(state => state.todoList.todoList);


    return (
        <div className="todoGroup">
            {(props.isDone ? toDoItems.filter(items => items.done) : toDoItems).map(((item) =>
                 <TodoItem 
                    key={item.id} 
                    itemKey={item.id}
                    isDone={item.done}
                    todoItem={item.text}>
                </TodoItem>
            ))}

            {/* {
                    
                    props.todoItemList.map((item) => 
                    <TodoItem 
                        key={item.id} 
                        itemKey={item.id}
                        isDone={item.done}
                        todoItem={item.text}>
                    </TodoItem>
                    
            )} */}
        </div>
    );
}

export default TodoGroup;
