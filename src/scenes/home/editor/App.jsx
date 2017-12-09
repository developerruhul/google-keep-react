import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";


class MainForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.addNote} className="c-main-form">
                <p>UNCATEGORIZED</p>
                <input ref={e => this.title = e} className="c-main-input" placeholder="Title" type="text" />
                <textarea ref={e => this.note = e} required wrap="hard" placeholder="Take a note..." className="c-main-input" rows="2"></textarea>
                <button type="submit"> DONE </button>
            </form>
        )
    }

    addNote = (e) => {
        e.preventDefault();
        this.props.addNote(this.title.value, this.note.value);
        this.note.value = ""; this.title.value = "";
    }

}



const mapDispatchToProps = (dispatch) => ({
    addNote: (title, note) => dispatch(noteSubmit(title, note))
})

export default connect(undefined, mapDispatchToProps)(MainForm);
