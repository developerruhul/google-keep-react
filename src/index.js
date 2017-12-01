import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom";


let Jsx = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(<Jsx />, document.getElementById('root'));

module.hot.accept('./App.jsx', () => {
    ReactDOM.render(<Jsx />, document.getElementById('root'));
})
