//@ts-check
import React from 'react';
import HomePage from "./scenes/home/App";
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
