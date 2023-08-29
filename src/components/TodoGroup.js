import TodoItem from './TodoItem';
import '../App.css';
import { useDispatch} from 'react-redux';


const TodoGroup = (props) => {

    const dispatch = useDispatch();

    const generateKey = (index) => {
        return (Math.random() + index);
    }
    
    return (
        <div className="todoGroup">
           {
                props.todoItemList.map((item) => 
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
