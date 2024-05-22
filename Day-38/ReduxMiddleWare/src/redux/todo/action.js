import { useDispatch } from "react-redux";
import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "../actionType";
import axios from "axios";

export const getTodo = (dispatch) => {
  dispatch(todoRequestAction());
  axios
    .get("http://localhost:3000/todos")
    .then((res) => {
      // console.log(res.data);
      dispatch(todoSuccessAction(res.data));
    })
    .catch((error) => {
      console.log("error:", error.message);
      dispatch(todoFailureAction());
    });
};

export const postTodo = (title) => (dispatch) => {
  dispatch(todoPostRequestAction()); //for loading
  const newTodo = {
    title: title,
  };
  axios
    .post("http://localhost:3000/todo", newTodo)
    .then((res) => {
      dispatch(todoPostSuccessAction(res.data));
    })
    .catch((error) => {
      dispatch(todoPostFailureAction());
      console.log(error);
    });
};
export const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload: payload };
};

export const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};

export const todoPostRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoPostSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const todoPostFailureAction = () => {
  return { type: TODO_FAILURE };
};

// delete
//---delete id;
//---todo ---store
//use filter method
