import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodo,
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/todo/action";

const TodoList = () => {
  const todo = useSelector((store) => store.todoReducer.todo);
  const loading = useSelector((store) => store.todoReducer.isLoading);
  const error = useSelector((store) => store.todoReducer.isError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo);
    // getTodo(dispatch);2
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {loading && <h1>...LOADING</h1>}
      {error && <h1>error...</h1>}
      <TodoInput />
      {todo.map((element) => {
        return <div key={element.id}>{element.title} </div>;
      })}
    </div>
  );
};

export default TodoList;
