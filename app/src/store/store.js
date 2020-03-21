import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "../reducers";

const store = createStore(
  postReducer,
  compose(applyMiddleware(thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;
