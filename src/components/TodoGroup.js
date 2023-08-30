import TodoItem from './TodoItem';
import '../App.css';
import { useSelector } from 'react-redux';

const TodoGroup = () => {

    const toDoItems = useSelector((state) => state.todoList.todoList.filter(todo => !todo.done))

    return (
        <div className="todoGroup">
            {                
                toDoItems.map((item) => 
                <TodoItem 
                    key={item.id} 
                    itemKey={item.id}
                    isDone={item.done}
                    todoItem={item.text}>
                </TodoItem>
                
            )}
        </div>
    );
}

export default TodoGroup;
