import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";
import Main from "../../../components/editor-main/main";
import Header from "../../../components/editor-header/header";
import onClickOutside from "react-onclickoutside";
import { RichUtils, EditorState, convertToRaw } from "draft-js";




class MainForm extends React.Component {
    state = {
        note: EditorState.createEmpty(),
        title: ''
    }


    render() {
        return (
            <section ref={e => this.main = e} className="c-main-editor">
                <Main
                    openEditor={() => this.openEditor(false)}
                    state={this.state}
                    handleKeyCommand={this.handleKeyCommand}
                    setNote={this.setLocalState}
                />
                
                <Header
                    openEditor={() => this.openEditor(true)}
                />
            </section >
        )
    }





    // editor methods
    setLocalState = (e, item) => this.setState({ [item]: e });

    _onCommand = (command) => {
        this.setLocalState(RichUtils.toggleInlineStyle(this.state.note, command), 'note');
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.setLocalState(newState, "note");
            return 'handled';
        }
        return 'not-handled';
    }







    // Ui methods
    handleClickOutside = (e) => this.openEditor(true);

    openEditor = (outside = false) => {
        this.main.classList[outside ? 'remove' : 'add']("editor-opened");

        // save the data when editor closes
        if (outside) {

            const title = this.state.title,
                note = convertToRaw(this.state.note.getCurrentContent());

            if (title || note)
                this.props.addNote(title, note);

        }
    }


}



const mapDispatchToProps = (dispatch) => ({
    addNote: (title, note) => dispatch(noteSubmit(title, note))
})

export default connect(undefined, mapDispatchToProps)(onClickOutside(MainForm));
