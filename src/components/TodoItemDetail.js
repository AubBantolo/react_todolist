import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import '../css/TodoItemDetail.css';

export const TodoItemDetail = () => {
    const { id } = useParams();
    const todoItem = useSelector((state) => state.todoList.todoList.find((todoItem) => todoItem.id === id));
    return (
        <div className="todo-detail">
            <h3>Todo Item Detail</h3>
            <div className="todo-content">
                <div id="id">{todoItem.id}</div>
                <div id="text">{todoItem.text}</div>
            </div>
        </div>
    );
}