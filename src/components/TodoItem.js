//Declare a New components

const TodoItem  = ({title, isCompleted}) => {
    return (
        <div>
            <input type="checkbox" checked={isCompleted}></input>
            <span>{title}</span>
        </div>

    );
}
export default TodoItem;