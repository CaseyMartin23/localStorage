import React, { useState } from "react";
import { genericApi } from "./genericApi";
const todosApi = genericApi("todos");

export const AddTodo: React.FC = () => {
  const [newTodo, setNewTodo] = useState();

  const onSubmitter = (e: any) => {
    todosApi.create({
      value: newTodo
    });
  };

  return (
    <div className="AddTodo">
      <form onSubmit={onSubmitter}>
        <input
          onChange={(e: any) => setNewTodo(e.target.value)}
          placeholder="Enter new Todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};
