import React from "react";
import { ObjTodos, todosApi } from "./TodoDisplay";

interface Props {
  todos: ObjTodos[];
}

export const TodoList: React.FC<Props> = props => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.value}
              <button
                onClick={() => {
                  if (todo.completed) {
                    todo.completed = false;
                    todo.value = todo.value.replace("**", "").replace("**", "");
                    todosApi.update(todo.id.toString(), todo);
                    window.location.reload();
                  } else {
                    todo.completed = true;
                    todo.value = `**${todo.value}**`;
                    todosApi.update(todo.id.toString(), todo);
                    window.location.reload();
                  }
                  console.log(
                    `clicked : ${todo.value} ==> and got ${todo.completed}`
                  );
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  todosApi.remove(todo.id.toString());
                  window.location.reload();
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
