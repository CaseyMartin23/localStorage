import React, { useState, useEffect } from "react";
import { genericApi } from "./genericApi";

const todosApi = genericApi<{ value: string; id: number }>("todos");

export const TodoDisplay: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    todosApi.all().then(res => {
      let todoValue = res.map(obj => obj.value);
      console.log(todoValue);
      setTodos(todoValue);
    });
  }, []);

  return <div></div>;
};
