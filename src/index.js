import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Reducers } from './store';
import HomePage from "./scenes/home/App";
import registerServiceWorker from './registerServiceWorker';






const store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



let render = () => ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <HomePage />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);



render();

// module.hot.accept('./scenes/home/App', () => {
//     render();
// })

registerServiceWorker();