import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { spamDetectorMiddleware } from "../middleware/middleware";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamDetectorMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  )
);

export default store;
