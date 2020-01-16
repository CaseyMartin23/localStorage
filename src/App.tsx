import React from "react";
import "./App.css";
import { AddTodo } from "./comp/AddTodo";
import { TodoDisplay } from "./comp/TodoDisplay";

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoDisplay />
      <AddTodo />
    </div>
  );
};

export default App;
