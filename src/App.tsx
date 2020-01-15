import React from "react";
import { TodoList } from "./comp/TodoList";
import "./App.css";
import { AddTodo } from "./comp/AddTodo";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoList />
      <AddTodo />
    </div>
  );
};

export default App;
