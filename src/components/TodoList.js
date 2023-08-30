import { useSelector } from 'react-redux';
import '../App.css';
import TodoGenerator from './TodoGenerator';
import TodoGroup from './TodoGroup';
import axios from 'axios';

const TodoList = (props) => {
    const api = axios.create({
    baseURL: 'https://64edbef81f8721827141ae4d.mockapi.io/'
    });

    api.get('/todos').then(response => console.log(response.data));

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

