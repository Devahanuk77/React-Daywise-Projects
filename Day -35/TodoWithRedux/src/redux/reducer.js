import {
  ADD,
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  SUB,
  TODO_FAILURE,
  TODO_REQUEST,
} from "../actionType";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, counter: state.counter + payload };
    case SUB:
      return { ...state, counter: state.counter - payload };
    case TODO_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODO_SUCCESS:
      return { ...state, todo: payload, isLoading: false };
    case TODO_FAILURE:
      return { ...state, isError: true, isLoading: false };
    case POST_TODO_SUCCESS:
      return { ...state, isLoading: false, todo: [...state.todo, payload] };
    default:
      return state;
  }
};
