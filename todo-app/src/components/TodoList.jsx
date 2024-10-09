import React from "react";
import TodoCard from "./TodoCard";

function TodoList({ todos, handleDeleteTodos }) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            handleDeleteTodos={handleDeleteTodos}
            key={todoIndex}
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
