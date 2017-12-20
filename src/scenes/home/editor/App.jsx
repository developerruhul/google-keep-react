//@ts-check
import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";
import Main from "../../../components/editor-main/main";
import Footer from "../../../components/editor-header/header";
import onClickOutside from "react-onclickoutside";
import { RichUtils, EditorState, /*convertToRaw*/ } from "draft-js";
import { categoryChange } from "../../../services/editor/actions";
import { addCategory } from "../../..//services/category/actions";




class MainForm extends React.Component {
    state = {
        note: EditorState.createEmpty(),
        title: EditorState.createEmpty()
    }


    render() {
        return (
            <section ref={e => this.main = e} className="c-main-editor editor-opened">
                <Main
                    openEditor={this.openEditor}
                    state={this.state}
                    handleKeyCommand={this.handleKeyCommand}
                    setNote={this.setLocalState}
                    {...this.props}
                />

                <Footer />
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
    handleClickOutside = _ => null //this.openEditor(false);

    openEditor = (shouldIopen = true) => {
        // if shouldIopen = false;
        // then remove the `editor-opened` class and close editor
        // else add it
        this.main.classList[shouldIopen ? 'add' : 'remove']("editor-opened");


        // save the data when editor closes
        // in this case when `shouldIopen = false`
        // and clear the inputs
        // if (!shouldIopen) {
        //     convert the inputs data into raw data to store
        //     in the DB and restore them in the note
        //     const title = convertToRaw(this.state.title.getCurrentContent()),
        //         note = convertToRaw(this.state.note.getCurrentContent());



        //     if nothings in the note field
        //     we don't do anything
        //     if (note.blocks[0].text !== '') {

        //         dispatch addNote action to get things going
        //         this.props.addNote(title, note);

        //     }

        // }
    }


}



const mapStateToProps = ({
    Editor: {
        ui: {
            categoryEditMode, category
        }
    },
    Category: categories
}) => ({ categoryEditMode, category, categories })

const mapDispatchToProps = dispatch => ({
    onCategoryChange: category => dispatch(categoryChange(category)),
    changeCategoryEditMode: _ => dispatch({ type: "CATEGORY_EDITMODE" }),
    addCategory: category => dispatch(addCategory(category)),
    addNote: (title, note) => dispatch(noteSubmit(title, note))
})


// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(MainForm));
