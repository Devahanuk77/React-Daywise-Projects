import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../action";
import { element } from "prop-types";

const TodoList = () => {
  const todo = useSelector((store) => store.todo);
  const loading = useSelector((store) => store.isLoading);
  const error = useSelector((store) => store.isError);

  const dispatch = useDispatch();
  const getTodo = () => {
    dispatch(todoRequestAction());
    axios
      .get("http://localhost:3000/todos")
      .then((res) => {
        console.log(res.data);
        dispatch(todoSuccessAction(res.data));
      })
      .catch((error) => {
        console.log("error:", error.message);
        dispatch(todoFailureAction());
      });
  };

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {loading && <h1>...LOADING</h1>}
      {error && <h1>error...</h1>}
      <TodoInput />
      {todo.map((element) => {
        return (
          <div key={element.id}>
            {element.title}---{element.author}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
