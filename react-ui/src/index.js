import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./css/index.css";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
