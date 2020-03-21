import { createStore, compose } from "redux";
import { postReducer } from "../reducers";

const store = createStore(
  postReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

export default store;
