import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import {
    extractIdFromNotes,
    toggleAll,
    toggleEditMode,
    toggleNote
} from "../../../services/notes/actions";


class NotesContainer extends React.Component {
    render() {
        const jsEditClass = this.props.editMode ? 'js-edit-mode' : '';
        const state = this.props;

        return (
            <div className={`o-notes-container ${jsEditClass}`}>
                <Header
                    toggleEditMode={() => state.toggleEditMode(state.editMode)}
                    onChange={(id) => state.toggleAll(state.notes, state.checkAll)}
                    checked={state.checkAll}
                    deleteNote={this.deleteNote}
                />
                <NoteCreator
                    data={state.notes}
                    onChange={state.toggleNote}
                    state={state.checkedNotesId}
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

    deleteNote = () => {
        this.props.dispatch({
            type: "delete",
            ids: (() => {
                let keys = Object.keys(this.state.checkedNotesId)
                return keys.filter(id => this.state.checkedNotesId[id]);
            })()
        })
    }

}



const stateToProps = ({ notes, Notes: { checkedNotesId, editMode, checkAll } }) => ({
    notes, checkedNotesId, editMode, checkAll
});

const dispatchToProps = (dispatch) => ({
    extractIdFromNotes: (notes) => dispatch(extractIdFromNotes(notes)),
    toggleAll: (ids, checkAll) => dispatch(toggleAll(ids, checkAll)),
    toggleEditMode: (editMode) => dispatch(toggleEditMode(editMode)),
    toggleNote: (id) => dispatch(toggleNote(id))
})


export default connect(stateToProps, dispatchToProps)(NotesContainer);
