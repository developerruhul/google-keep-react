import React from 'react';
import './styles/app.css';
import Header from './header/header';
import Nav from './nav/Nav';
import NotesContainer from './notesContainer/App';
import MainForm from './editor/App';



export default class App extends React.Component {
    render() {
        return (
            <main className="o-body">
                <Header />
                <Nav />
                
                <div className="o-main-body">
                    <div className="o-main-layout">
                        <MainForm />
                        <NotesContainer />
                    </div>
                </div>

            </main>

        )
    }
}