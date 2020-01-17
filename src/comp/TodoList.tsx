import React from "react";
import { ObjTodos, todosApi } from "./TodoDisplay";

interface Props {
  todos: ObjTodos[];
  load(): void;
}

export const TodoList: React.FC<Props> = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.completed ? <strong>{todo.value}</strong> : todo.value}
              <button
                className="DoneAndRemove"
                onClick={() => {
                  todosApi
                    .update(todo.id.toString(), {
                      ...todo,
                      completed: !todo.completed
                    })
                    .then(res => props.load());
                }}
              >
                {todo.completed ? "Completed!" : "Done"}
              </button>
              <button className="DoneAndRemove">X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
