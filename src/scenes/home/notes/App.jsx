import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import { deleteNote } from "../../../services/editor/actions";
import {
    extractIdFromNotes,
    toggleAll,
    toggleEditMode,
    toggleNote
} from "../../../services/notes/actions";



class NotesContainer extends React.Component {
    render() {
        const jsEditClass = this.props.editMode ? 'js-edit-mode' : '';
        const props = this.props;

        return (
            <div className={`o-notes-container ${jsEditClass}`}>
                <Header
                    toggleEditMode={() => props.toggleEditMode(props.editMode)}
                    onChange={() => props.toggleAll(props)}
                    checked={props.checkAll}
                    deleteNote={() => props.deleteNote(props)}
                />
                <NoteCreator
                    data={props.notes}
                    onChange={props.toggleNote}
                    state={props.checkedNotesId}
                />
            </div>
        )
    }

    componentWillReceiveProps({ notes }) {
        let nextKey = Object.keys(notes).length,
            oldKey = Object.keys(this.props.notes).length;

        if (oldKey !== nextKey) {
            this.props.extractIdFromNotes(notes);
        }
    }

}



const stateToProps = ({ notes, Notes: { checkedNotesId, editMode, checkAll } }) => ({
    notes: notes, checkedNotesId, editMode, checkAll
});

const dispatchToProps = (dispatch) => ({
    extractIdFromNotes: (notes) => dispatch(extractIdFromNotes(notes)),

    toggleAll: (props) => dispatch(toggleAll(props)),

    toggleEditMode: (editMode) => dispatch(toggleEditMode(editMode)),

    toggleNote: (id) => dispatch(toggleNote(id)),

    deleteNote: (props) => dispatch(deleteNote(props))
})

export default connect(stateToProps, dispatchToProps)(NotesContainer);
