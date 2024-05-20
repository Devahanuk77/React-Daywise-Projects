import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import Sample from "./Sample";
import { store } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addFunction, subFunction } from "./action";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
