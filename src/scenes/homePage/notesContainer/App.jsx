import React from 'react';
import Header from './components/header';
import Note from './components/note';
import './notes.css';

let Data = require('./data.json');




export default class NotesContainer extends React.Component {
    state = {
        editMode: false
    }

    render() {
        const jsEditClass = this.state.editMode ? 'js-edit-mode' : '';

        return (
            <div className={`o-notes-container ${jsEditClass}`}>
                <Header toggleEditMode={this.toggleEditMode} />
                <Notes />
            </div>
        )
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }
}





const Notes = () => (
    <div className="o-notes-cards-wrapper">
        {
            Data.map(item => (
                <Note
                    key={item.id}
                    title={item.title}
                    note={item.note}
                    modified={item.modified}
                    decorate={item.decorate}
                    id={item.id}
                />
            ))
        }
    </div>
)
