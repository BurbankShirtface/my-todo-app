import React from "react";

function TodoList({ todos, setTodos }) {
  function handleDelete(e) {
    setTodos(todos.filter((todo) => todo.id != e.target.parentElement.id));
  }

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id} id={todo.id} className="todo-list-item">
              {todo.text}
              <button onClick={handleDelete} className="delete-button">
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
