import DoneItem from "./DoneItem";

const DoneGroup = (props) => {

    const toDoItems = props.todoList;
    console.log(toDoItems);

    return (
        <div className="todoGroup">        
        {toDoItems.map(((item) => 
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