import React, { useState } from "react";
import { genericApi } from "./genericApi";
const todosApi = genericApi("todos");

export const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState();

  const onSubmitter = (e: any) => {
    todosApi.create({
      value: newTodo.toLowerCase(),
      completed: false
    });
  };

  return (
    <div className="AddTodo">
      <form onSubmit={onSubmitter}>
        <input
          className="AddToDoInput"
          onChange={(e: any) => setNewTodo(e.target.value)}
          placeholder="Enter new Todo"
        />
        <button className="AddToDoBtn">Add Todo</button>
      </form>
    </div>
  );
};
