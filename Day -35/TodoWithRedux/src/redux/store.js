import { createStore, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  counter: 1,
  todo: [],
  isLoading: false,
  isError: false,
};

export const store = legacy_createStore(reducer, initialState);
