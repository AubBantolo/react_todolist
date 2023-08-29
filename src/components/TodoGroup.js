import TodoItem from './TodoItem';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from './todoListSlice';


const TodoGroup = (props) => {

    const dispatch = useDispatch();

    const generateKey = (index) => {
        return (Math.random() + index);
    }

    
    // const itemList = useSelector((state) => state.todoList)
    
    return (
        <div className="todoGroup">
           {
                props.todoItemList.map((item) => 
                <TodoItem 
                key={item.id} 
                // item={item} 
                itemKey={item.id}
                todoItem={item.text}>
                </TodoItem>
                
           )}
        </div>
    );
}

export default TodoGroup;
