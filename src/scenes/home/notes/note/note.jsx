import React from 'react';
import { CheckboxInput } from '../../../index';
// import { Utils } from "../../../index";
import './style/note.css';
import { EditorState, convertFromRaw, RichUtils } from "draft-js";
import Main from "../../../../components/editor-main/main";
import Footer from "../../../../components/editor-footer/footer";
import { connect } from "react-redux";
import { noteSubmit } from "../../../../services/editor/actions";
import { addCategory } from "../../../../services/category/actions";




class Note extends React.Component {
    constructor(props) {
        super(props);
        let makeEditorState = state => EditorState.createWithContent(convertFromRaw(state));

        this.state = {
            title: makeEditorState(this.props.title),
            note: makeEditorState(this.props.note),
            star: this.props.star,
            lock: this.props.lock,
            category: this.props.category,
            categoryEditMode: false,
        }

    }

    render() {

        const {
            toggleNote,
            checkedNotesId,
            id,
            star,
            lock
        } = this.props;


        return (
            <article id={id} onMouseDown={this.makeNoteActive} className="o-note">
                <input
                    checked={checkedNotesId[id] || false}
                    onChange={_ => toggleNote(id)}
                    type="checkbox"
                    className="o-samsung-checkbox"
                />

                <Main
                    id={id}
                    handleKeyCommand={this.handleKeyCommand}
                    setNote={this.setLocalState}
                    changeCategoryEditMode={this.changeCategoryEditMode}
                    onCategoryChange={this.categoryChange}
                    {...{ ...this.props, ...this.state }}
                />

                <div className="note-modified">
                    Modified: {this.props.modified}
                </div>

                <Footer
                    starChange={this.starChange}
                    lockChange={this.lockChange}
                    saveNote={this.saveNote}
                    {...this.state}
                />
            </article>
        )
    }

    // ui method
    makeNoteActive = ({ currentTarget: { classList } }) => {

        if (!this.props.activeNoteClass && !this.props.editMode) {

            // store the id so that overlay knows which note to modify
            this.props.clickOnNote(this.props.id);

            // make note active
            classList.add('active');

            // add a overaly
            document.getElementById('activeNoteOverlay')
                .classList.add("active");
        }
    }




    // ---------------editor methods---------------


    // common
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



    // footer methods
    lockChange = () => {
        const pass = !this.state.lock ? prompt("Enter a password") : false;
        this.setState({ lock: pass });
    }

    starChange = () => this.setState(prev => ({ star: !prev.star }));

    saveNote = () => {
        this.props.saveNote({ ...this.state, id: this.props.id })
    }




    // category editor
    changeCategoryEditMode = () => {
        this.setState(prev => ({
            categoryEditMode: !prev.categoryEditMode
        }))
    }

    categoryChange = name => {
        this.setState({ category: name })
    }
}



const mapDispatchToProps = d => ({
    saveNote: (_) => d(noteSubmit(_)),
    addCategory: _ => d(addCategory(_)),
});

const mapStateToProps = ({ Category: categories }) => ({ categories });


export default connect(mapStateToProps, mapDispatchToProps)(Note);
