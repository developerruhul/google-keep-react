//@ts-check
import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";
import Main from "../../../components/editor-main/main";
import Footer from "../../../components/editor-footer/footer";
import onClickOutside from "react-onclickoutside";
import { RichUtils, EditorState, convertToRaw } from "draft-js";
import { categoryChange, starFilter, lockFilter, noteChange, titleChange } from "../../../services/editor/actions";
import { addCategory } from "../../../services/category/actions";




class MainForm extends React.Component {
    render() {
        return (
            <section id="main__editor__ref" className="c-main-editor">

                <Main
                    // @ts-ignore
                    openEditor={this.openEditor}
                    handleKeyCommand={this.handleKeyCommand}
                    setNote={this.setLocalState}
                    {...this.props}
                />

                <Footer
                    //@ts-ignore
                    star={this.props.star}
                    starChange={this.props.starChange}
                    lockChange={_ => this.props.lockChange(this.props.lock)}
                    lock={this.props.lock}
                    saveNote={_ => this.openEditor(false)}
                />

            </section >
        )
    }





    // editor methods-------------
    setLocalState = (e, item) => {
        if (item === "note") {
            this.props.noteChange(e)
        } else {
            this.props.titleChange(e);
        }
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




    // Ui methods---------------------
    handleClickOutside = _ => this.openEditor(false);

    // dispatch the save note action from here when the editor closes
    openEditor = (shouldIopen = true) => {

        // if shouldIopen = false;
        // then remove the `editor-opened` class and close editor
        // else add it
        document.getElementById("main__editor__ref")
            .classList[shouldIopen ? 'add' : 'remove']("editor-opened");


        // save the data when editor closes
        // in this case when `shouldIopen = false`
        // and reset the editor
        if (!shouldIopen) this.saveEditorData();
    }

    saveEditorData = _ => {

        // convert the inputs data into raw data to store
        // in the DB and restore them in the note
        const title = convertToRaw(this.props.title.getCurrentContent()),
            note = convertToRaw(this.props.note.getCurrentContent());

        // resets the editor
        this.props.editorReset();


        // if nothings in the note field
        // we don't do anything
        if (note.blocks[0].text !== '') {

            // dispatch addNote action to get things going
            // @ts-ignore
            this.props.addNote(
                title, note, this.props.category, this.props.star, this.props.lock
            );

        }

    }

}




const mapStateToProps = ({
    Editor: {
        ui: { categoryEditMode, category, title, note },
    footer: { star, locked: lock }
    },
    Category: categories
}) => ({
        categoryEditMode,
        category,
        categories,
        star,
        lock,
        title,
        note
    })


const mapDispatchToProps = dispatch => ({
    onCategoryChange: _ => dispatch(categoryChange(_)),
    changeCategoryEditMode: _ => dispatch({ type: "CATEGORY_EDITMODE" }),
    addCategory: _ => dispatch(addCategory(_)),
    addNote: (..._) => dispatch(noteSubmit(..._)),
    starChange: _ => dispatch(starFilter()),
    lockChange: _ => dispatch(lockFilter(_)),
    editorReset: _ => dispatch({ type: "RESET_EDITOR" }),
    noteChange: _ => dispatch(noteChange(_)),
    titleChange: _ => dispatch(titleChange(_))
})


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(MainForm));
