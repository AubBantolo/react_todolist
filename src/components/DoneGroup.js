import DoneItem from "./DoneItem";
import { useSelector } from 'react-redux';

const DoneGroup = () => {

    const toDoItems = useSelector((state) => state.todoList.todoList.filter(todo => todo.done))

    return (
        <div className="todoGroup">        
        {
        toDoItems.map(((item) => 
            <DoneItem 
                key={item.id} 
                itemKey={item.id}
                isDone={item.done}
                todoItem={item.text}>
            </DoneItem>
     
        ))}
        </div>
    );
};

export default DoneGroup;