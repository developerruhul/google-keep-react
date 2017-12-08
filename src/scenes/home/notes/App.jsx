import React from 'react';
import Header from './header/header';
import './styles/notes.css';
import { connect } from "react-redux";
import NoteCreator from './components/noteCreator';
import { extractIdFromNotes } from "../../../services/notes/actions";


class NotesContainer extends React.Component {
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
        this.props.extractIdFromNotes(notes);
    }

    toggleAll = () => {
        let { checkedNotesId, checkAll } = this.state,
            copy = { ...checkedNotesId };

        for (const i in copy) {
            if (copy.hasOwnProperty(i)) copy[i] = !checkAll;
        }

        this.setState(prev => ({
            checkedNotesId: copy,
            checkAll: !checkAll
        }))
    }

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    changeCheck = (id) => {
        this.setState(prev => this.checkBoxStateChange(prev, id));
    }

    checkBoxStateChange(prev, id) {
        return ({
            checkedNotesId: {
                ...prev.checkedNotesId,
                [id]: !prev.checkedNotesId[id]
            },
            checkAll: false
        });
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



const stateToProps = ({ notes, extractID }) => ({ notes, extractID });

const dispatchToProps = (dispatch) => ({
    extractIdFromNotes: (notes) => dispatch(extractIdFromNotes(notes))
})


export default connect(stateToProps, dispatchToProps)(NotesContainer);
