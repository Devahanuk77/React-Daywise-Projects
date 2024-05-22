import {
  applyMiddleware,
  combineReducers,
  createStore,
  legacy_createStore,
} from "redux";
import { reducer as todoReducer } from "./todo/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  todoReducer,
});

// const logger = (store) => (dispatch) => (action) => {
//   // console.log(a); //redux store.
//   // console.log(b); //dispatch function
//   // console.log(c); //action object

//   // getTodo(dispatch);
//   // dispatch(getTodo);
//   if (typeof action === "function") {
//     return action(dispatch);
//   } else {
//     return dispatch(action);
//   }
//   //dispatch({type:,payload})
// };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//function currying
// function logger(a,b,c){
//   return a+b+c;
// }
// function logger(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }

// logger(1)
