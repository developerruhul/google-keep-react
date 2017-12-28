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
    toggleActiveNote,
    toggleEditMode
} from "../../../services/notes/actions";





class NotesContainer extends React.Component {

    render() {
        const props = this.props;
        const noteOverlayClass = this.props.activeNote ? 'active' : '';

        return (
            <div ref={e => this.parent = e} className="o-notes-container">
                <Header
                    toggleEditMode={this.toggleEditMode}
                    onChange={() => props.toggleAll(props)}
                    checked={props.checkAll}
                    deleteNote={() => props.deleteNote(props)}
                />

                <div
                    onMouseDown={this.makeNoteInActive}
                    id="activeNoteOverlay"
                    className={`active-note-overlay ${noteOverlayClass}`}>
                </div>

                <NoteCreator
                    clickOnNote={this.props.dispatchWithID}
                    activeNoteClass={this.props.activeNote}
                    {...this.props}
                />
            </div>
        )
    }


    //------------ making active note-----------------
    makeNoteInActive = () => {

        if (!this.props.editMode) {

            document.getElementById("activeNoteOverlay").classList.remove('active');
            document.getElementById(this.props.activeNote).classList.remove("active");

            this.props.dispatchWithID(false);
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
        this.props.toggleEditMode();

        setTimeout(() => {
            const classList = this.parent.classList;
            classList.toggle("js-edit-mode", this.props.editModef);
        }, 0);
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
    toggleAll: _ => dispatch(toggleAll(_)),
    toggleNote: _ => dispatch(toggleNote(_)),
    deleteNote: _ => dispatch(deleteNote(_)),
    dispatchWithID: _ => dispatch(toggleActiveNote(_)),
    toggleEditMode: _ => dispatch(toggleEditMode())
})


export default connect(stateToProps, dispatchToProps)(NotesContainer);
