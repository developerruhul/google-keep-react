import React from 'react';
import { CheckboxInput } from '../../../index';
// import { Utils } from "../../../index";
import './style/note.css';
import { EditorState, convertFromRaw, RichUtils } from "draft-js";
import Main from "../../../../components/editor-main/main";



class Note extends React.Component {
    state = {
        title: EditorState.createWithContent(
            convertFromRaw(this.props.title)
        ),
        note: EditorState.createWithContent(
            convertFromRaw(this.props.note)
        )
    }

    render() {
        const { state, id, clickOnNote, ...other } = this.props;

        return (
            <article onMouseDown={_ => clickOnNote(id)} className="o-note">
                <CheckboxInput
                    {...other}
                    checked={state[id]}
                />

                <Main
                    id={this.props.id}
                    handleKeyCommand={this.handleKeyCommand}
                    setNote={this.setLocalState}
                    {...this.state}
                />

            </article>
        )
    }


    // editor methods
    setLocalState = (e, item) => {
        this.setState({ [item]: e })
    }

    _onCommand = (command) => {
        this.setLocalState(RichUtils.toggleInlineStyle(this.props.note, command), 'note');
    }

    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.setLocalState(newState, "note");
            return 'handled';
        }
        return 'not-handled';
    }

}

export default Note;
