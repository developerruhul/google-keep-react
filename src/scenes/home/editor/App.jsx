import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import Editor from './services/index';


class MainForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.addNote} className="c-main-form">
                <p>UNCATEGORIZED</p>
                <input ref="title" className="c-main-input" placeholder="Title" type="text" />
                <textarea ref="note" required wrap="hard" placeholder="Take a note..." className="c-main-input" rows="2"></textarea>
                <button type="submit"> DONE </button>
            </form>
        )
    }

    addNote = (e) => {
        e.preventDefault();
        Editor.processNote.apply(this);
    }

}


export default connect()(MainForm);