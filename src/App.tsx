import React from "react";
import { AddTodo } from "./comp/AddTodo";
import { TodoDisplay } from "./comp/TodoDisplay";
import { Header } from "./comp/Header";
import "./App.css";
import "./MyCss.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <TodoDisplay />
      <AddTodo />
    </div>
  );
};

export default App;
