import "./Todo.css";

function Todo({title, onTodoDelete}) {
  return (
    <div className="todo">
      <div>
        <p>{title}</p>
        <button onClick={onTodoDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
