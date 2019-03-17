import React from "react";
import { connect } from "react-redux";
import { Checkbox } from "@material-ui/core";

import Main from "components/editor-main/main";
import Footer from "components/editor-footer/footer";

import { actions as noteActions } from "reducers/editor/notes";
import { actions as categoryActions } from "reducers/category";

import "./style.css";

class Note extends React.Component {
  state = {
    title: this.props.title,
    note: this.props.note,
    star: this.props.star,
    lock: this.props.lock,
    category: this.props.category,
    categoryEditMode: false
  };

  // ui method
  makeNoteActive = ({ currentTarget: { classList } }) => {
    const makeItActive = _ => {
      if (!this.props.activeNoteClass && !this.props.editMode) {
        this.props.clickOnNote(this.props.id);

        classList.add("active");

        // add a overaly
        document.getElementById("activeNoteOverlay").classList.add("active");
      }
    };

    // check if the note is lock
    if (
      this.state.lock &&
      !this.props.activeNoteClass &&
      !this.props.editMode
    ) {
      let userInput = prompt("Enter the password");
      if (userInput)
        userInput === this.state.lock
          ? makeItActive()
          : alert("Wrong password");
    } else {
      makeItActive();
    }
  };

  // ---------------editor methods---------------

  // common
  setLocalState = (e, item) => {
    this.setState({ [item]: e });
  };

  // save note when note closes
  componentWillReceiveProps({ activeNoteClass, category }) {
    if (this.props.category !== category) this.setState({ category });
    if (!activeNoteClass && this.props.activeNoteClass !== activeNoteClass)
      this.saveNote();
  }

  // footer methods
  lockChange = () => {
    const pass = this.state.lock ? false : prompt("Enter a password");
    this.setState({ lock: pass });
  };

  starChange = () => this.setState(prev => ({ star: !prev.star }));

  saveNote = () => {
    let title = this.state.title;
    let note = this.state.note;

    this.props.saveNote({ ...this.state, title, note, id: this.props.id });

    window.globalUtil.makeNoteInActive.apply(this);
  };

  // category editor
  changeCategoryEditMode = () => {
    this.setState(prev => ({
      categoryEditMode: !prev.categoryEditMode
    }));
  };

  categoryChange = name => {
    this.setState({ category: name });
  };

  render() {
    const { toggleNote, checkedNotesId, id } = this.props;

    return (
      <article id={id} onMouseDown={this.makeNoteActive} className="o-note">
        <Checkbox
          checked={checkedNotesId[id] || false}
          onChange={_ => toggleNote(id)}
          classes={{
            root: "o-samsung-checkbox",
            checked: "checked"
          }}
        />

        <Main
          {...{ ...this.props, ...this.state }}
          id={id}
          setNote={this.setLocalState}
          changeCategoryEditMode={this.changeCategoryEditMode}
          onCategoryChange={this.categoryChange}
        />

        <div className="note-modified">Modified: {this.props.modified}</div>

        <Footer
          starChange={this.starChange}
          lockChange={this.lockChange}
          saveNote={this.saveNote}
          {...this.state}
        />
      </article>
    );
  }
}

const mapDispatchToProps = d => ({
  saveNote: _ => d(noteActions.noteSubmit(_)),
  addCategory: _ => d(categoryActions.addCategory(_))
});

const mapStateToProps = ({ Category: categories }) => ({ categories });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note);
