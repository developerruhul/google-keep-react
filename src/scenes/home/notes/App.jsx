import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import { deleteNote } from "../../../services/editor/actions";


import {
    extractIdFromNotes,
    toggleAll,
    toggleNote,
    toggleActiveNote
} from "../../../services/notes/actions";





class NotesContainer extends React.Component {

    render() {
        const props = this.props;
        this.activeNoteClassAdd();

        return (
            <div ref={e => this.parent = e} className="o-notes-container">
                <Header
                    toggleEditMode={this.toggleEditMode}
                    onChange={() => props.toggleAll(props)}
                    checked={props.checkAll}
                    deleteNote={() => props.deleteNote(props)}
                />

                <div
                    onMouseDown={this.props.toggleActiveNote}
                    ref={e => this.noteOverlay = e}
                    className="active-note-overlay">
                </div>
                <NoteCreator
                    data={props.notes}
                    onChange={props.toggleNote}
                    state={props.checkedNotesId}
                    clickOnNote={this.props.toggleActiveNote}
                />
            </div>
        )
    }

    activeNoteClassAdd = (e) => {
        const toggle = _ => [_].toggle("active", ![_].contains("active"));
        if (this.props.activeNote) {
            // toggle(this.props.activeNote.classList)
            // toggle(this.noteOverlay.classList)
        }
    }

    // extract and store the id from every note object
    // to keep track of selected notes
    componentWillReceiveProps({ notes }) {
        let nextKey = Object.keys(notes).length,
            oldKey = Object.keys(this.props.notes).length;

        if (oldKey !== nextKey) {
            this.props.extractIdFromNotes(notes);
        }
    }

    // toggle `js-edit-mode` class on the parent
    // to toggle edit mode
    toggleEditMode = () => {
        const classList = this.parent.classList;
        classList.toggle("js-edit-mode", !classList.contains("js-edit-mode"))
    }


}




const stateToProps = ({
    Editor: { notes },
    Notes: { checkedNotesId, editMode, checkAll, activeNote }
}) => ({
        notes: notes, checkedNotesId, editMode, checkAll, activeNote
    });

const dispatchToProps = (dispatch) => ({
    extractIdFromNotes: (notes) => dispatch(extractIdFromNotes(notes)),

    toggleAll: (props) => dispatch(toggleAll(props)),

    toggleNote: (id) => dispatch(toggleNote(id)),

    deleteNote: (props) => dispatch(deleteNote(props)),
    toggleActiveNote: (_) => dispatch(toggleActiveNote(_))
})


export default connect(stateToProps, dispatchToProps)(NotesContainer);
