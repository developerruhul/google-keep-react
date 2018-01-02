import React from 'react';
import { HomePage } from "./scenes/index";
// import { SignScene } from "./scenes/index";
import { HashRouter } from "react-router-dom";


export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <HomePage />
            </HashRouter>
        )
    }
}
