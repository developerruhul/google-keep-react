import React from 'react';
import './style/editor.css';
import { connect } from "react-redux";
import { noteSubmit } from "../../../services/editor/actions";
import Main from "./main/main";
import Header from "./header/header";
import Footer from './footer/footer';


class MainForm extends React.Component {
    render() {
        return (
            <section className="c-main-editor">
                <Header />
                <Main />
                <Footer />
            </section >
        )
    }

    addNote = (e) => {
        e.preventDefault();
        this.props.addNote(this.title.value, this.note.value);
        this.note.value = ""; this.title.value = "";
    }

}



const mapDispatchToProps = (dispatch) => ({
    addNote: (title, note) => dispatch(noteSubmit(title, note))
})

export default connect(undefined, mapDispatchToProps)(MainForm);
