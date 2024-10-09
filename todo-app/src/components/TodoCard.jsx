import React from "react";

function TodoCard({ children, handleDeleteTodos, index }) {
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleDeleteTodos(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
