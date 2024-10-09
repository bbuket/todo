import React from "react";

function TodoCard({ children, handleDeleteTodos, index, handleEditTodo }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
        onClick={() => {
          handleEditTodo(index);
        }}>

          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
        onClick={() => {
          handleDeleteTodos(index);
        }}
        
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
