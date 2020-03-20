import React from "react";
import { render } from "react-dom";
import "./index.css";
import { App } from "./Components/App/App";
import { Provider } from "react-redux";
import store from "./store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
