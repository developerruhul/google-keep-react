import React from 'react';
import './styles/app.css';
import Header from './header/header';
import Nav from './nav/Nav';
import NotesContainer from './notes/App';
import MainForm from './editor/App';
import IDBFire from "../../services/firebase/index";



export default class App extends React.Component {
    render() {
        return (
            <main className="js-wrapper">
                <Header />
                <Nav />

                <main className="o-main">
                    <div className="o-main-layout">
                        <MainForm />
                        <NotesContainer />
                        <IDBFire />
                    </div>
                </main>

            </main>

        )
    }
}
