import React, { useState, useEffect } from "react";
import { genericApi } from "./genericApi";
import { TodoList } from "./TodoList";

export type ObjTodos = {
  value: string;
  id: number;
  completed: boolean;
};

export const todosApi = genericApi<ObjTodos>("todos");

export const TodoDisplay: React.FC = () => {
  const [todos, setTodos] = useState<ObjTodos[]>([]);

  useEffect(() => {
    todosApi.all().then(res => setTodos(res));
  }, []);

  return (
    <div>
      <input
        onChange={(e: any) => {
          let userInput = e.target.value
            .toLowerCase()
            .replace("**", "")
            .replace("**", "");
          console.log("Boolean for userInput to list of todos ==> ", userInput);
          todosApi
            .filterBy("value", userInput)
            .then((res: any) => setTodos(res));
        }}
        placeholder="Search..."
      />
      <div onClick={() => todosApi.all().then(res => setTodos(res))}>all</div>
      <div
        onClick={() =>
          todosApi.filterBy("completed", false).then(res => setTodos(res))
        }
      >
        to-do
      </div>
      <div
        onClick={() => {
          todosApi.filterBy("completed", true).then(res => setTodos(res));
        }}
      >
        done
      </div>
      <TodoList todos={todos} />
    </div>
  );
};
