import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';




class NotesContainer extends React.Component {
    state = {
        editMode: false
    }

    render() {
        const jsEditClass = this.state.editMode ? 'js-edit-mode' : '';

        return (
            <div className={`o-notes-container ${jsEditClass}`}>
                <Header toggleEditMode={this.toggleEditMode} />
                <NoteCreator data={this.props.notes} />
            </div>
        )
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }
}



const stateToProps = ({ notes }) => ({ notes });

export default connect(stateToProps)(NotesContainer);
