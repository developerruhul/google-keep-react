import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./router";
import "./index.css";

let render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );

render();

if (module.hot) {
  module.hot.accept("./router", () => {
    render();
  });
}
