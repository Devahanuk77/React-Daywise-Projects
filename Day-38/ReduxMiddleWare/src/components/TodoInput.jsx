import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postTodo,
  todoPostFailureAction,
  todoPostRequestAction,
  todoPostSuccessAction,
} from "../redux/todo/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // const addTodo = () => {
  //   postTodo(title, dispatch);
  //   setTitle("");
  // };

  const addHandler = () => {
    dispatch(postTodo(title));
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addHandler}>submit</button>
    </div>
  );
};

export default TodoInput;
