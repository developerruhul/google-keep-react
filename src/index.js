import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from "./store";
import Router from "./router";
import registerServiceWorker from "./registerServiceWorker";
import './index.css';

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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

registerServiceWorker();
