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
  const [userSearch, setUserSearch] = useState("");

  const load = (search?: string) =>
    todosApi.filterBy("value", search || "").then(res => setTodos(res));

  useEffect(() => {
    load(userSearch);
  }, [userSearch]);

  return (
    <div className="TodoDisplay">
      <input
        className="Search-Bar"
        onChange={(e: any) => {
          let userInput = e.target.value;
          console.log("userInput ==> ", userInput);
          setUserSearch(userInput);
          console.log("this is userSearch ==>", userSearch);
          todosApi.filterBy("value", userInput).then(res => setTodos(res));
        }}
        placeholder="Search..."
      />
      <div
        className="SortDiv"
        onClick={() => todosApi.all().then(res => setTodos(res))}
      >
        All
      </div>
      <div
        className="SortDiv"
        onClick={() =>
          todosApi.filterBy("completed", false).then(res => setTodos(res))
        }
      >
        To-Do
      </div>
      <div
        className="SortDiv"
        onClick={() => {
          todosApi.filterBy("completed", true).then(res => setTodos(res));
        }}
      >
        Done
      </div>
      <TodoList todos={todos} load={load} />
    </div>
  );
};
