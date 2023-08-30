import { useNavigate } from "react-router-dom";

const DoneItem = (props) => {
    const navigate = useNavigate();

    const onClickTodoItem = () => {
        navigate("/done/" + props.itemKey);
        console.log(props);
    };

    return (

            <div className="todoItem">
                <span id="selectItem" className={props.isDone ? "strikethrough" : ""} onClick={onClickTodoItem}>{props.todoItem}</span>
            </div>

    );
};

export default DoneItem;