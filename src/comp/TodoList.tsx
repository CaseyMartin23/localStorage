import React from "react";

export const TodoList: React.FC = () => {
  // console.log(todos);

  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
