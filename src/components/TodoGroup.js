import TodoItem from './TodoItem';
import '../App.css';

const TodoGroup = (props) => {

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
