import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers";
import { spamDetectorMiddleware } from "../middleware/middleware";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "../middleware/sagas";

const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, spamDetectorMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
  )
);

saga.run(sagaWatcher);

export default store;
