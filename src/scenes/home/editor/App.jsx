import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";
import Main from "./main/main";
import Header from "./header/header";
import Footer from './footer/footer';
import onClickOutside from "react-onclickoutside";


class MainForm extends React.Component {
    render() {
        return (
            <section ref={e => this.main = e} className="c-main-editor">
                <Header
                    openEditor={() => this.openEditor(true)}
                />
                <Main
                    openEditor={() => this.openEditor(false)}
                />
                
                <Footer />
            </section >
        )
    }

    addNote = (e) => {
        e.preventDefault();
        this.props.addNote(this.title.value, this.note.value);
        this.note.value = ""; this.title.value = "";
    }

    openEditor = (outside = false) =>
        this.main.classList[outside ? 'remove' : 'add']("editor-opened");
    handleClickOutside = (e) => this.openEditor(true);
}



const mapDispatchToProps = (dispatch) => ({
    addNote: (title, note) => dispatch(noteSubmit(title, note))
})

export default connect(undefined, mapDispatchToProps)(onClickOutside(MainForm));
