import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import { deleteNote } from "../../../services/editor/actions";

import {
    extractIdFromNotes,
    toggleAll,
    toggleNote
} from "../../../services/notes/actions";





class NotesContainer extends React.Component {

    render() {
        const props = this.props;

        return (
            <div ref={e => this.parent = e} className="o-notes-container">
                <Header
                    toggleEditMode={this.toggleEditMode}
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



    toggleEditMode = () => {
        const classList = this.parent.classList;
        classList.toggle("js-edit-mode", !classList.contains("js-edit-mode"))
    }




}





const stateToProps = ({
    Editor: { notes },
    Notes: { checkedNotesId, editMode, checkAll }
    
    }) => ({
        notes: notes, checkedNotesId, editMode, checkAll
    });






const dispatchToProps = (dispatch) => ({
    extractIdFromNotes: (notes) => dispatch(extractIdFromNotes(notes)),

    toggleAll: (props) => dispatch(toggleAll(props)),

    toggleNote: (id) => dispatch(toggleNote(id)),

    deleteNote: (props) => dispatch(deleteNote(props))
})


export default connect(stateToProps, dispatchToProps)(NotesContainer);
