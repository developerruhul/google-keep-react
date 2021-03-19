import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';
import './index.css';

let render = () =>
  ReactDOM.render(
    <Provider store={store.store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={store.persistor}>
          <Router />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );

render();

if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}
