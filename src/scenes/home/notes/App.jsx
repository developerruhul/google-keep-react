import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import MainUtil from './util/main';


class NotesContainer extends MainUtil {
    state = {
        editMode: false,
        checkedNotesId: {},
        checkAll: false
    }

    render() {
        const jsEditClass = this.state.editMode ? 'js-edit-mode' : '';

        return (
            <div className={`o-notes-container ${jsEditClass}`}>
                <Header
                    toggleEditMode={this.toggleEditMode}
                    onChange={this.toggleAll}
                    checked={this.state.checkAll}
                    deleteNote={this.deleteNote}
                />
                <NoteCreator
                    data={this.props.notes}
                    onChange={this.changeCheck}
                    state={this.state.checkedNotesId}
                />
            </div>
        )
    }

    componentWillReceiveProps({ notes }) {
        this.extractIdFromNotes(notes);
    }

}


const stateToProps = ({ notes }) => ({ notes });
export default connect(stateToProps)(NotesContainer);
