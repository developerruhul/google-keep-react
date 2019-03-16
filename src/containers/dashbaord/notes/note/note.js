import React from "react";
// import { CheckboxInput } from '../../../index';
// import { Utils } from "../../../index";
import "./style/note.css";
import { EditorState, convertFromRaw, RichUtils, convertToRaw } from "draft-js";
import Main from "../../../../components/editor-main/main";
import Footer from "../../../../components/editor-footer/footer";
import { connect } from "react-redux";
import { actions as noteActions } from "reducers/editor/notes";
import { actions as categoryActions } from "reducers/category";
import { Checkbox } from "@material-ui/core";

class Note extends React.Component {
  constructor(props) {
    super(props);
    let makeEditorState = state =>
      EditorState.createWithContent(convertFromRaw(state));

    this.state = {
      title: makeEditorState(this.props.title),
      note: makeEditorState(this.props.note),
      star: this.props.star,
      lock: this.props.lock,
      category: this.props.category,
      categoryEditMode: false
    };
  }

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

  _onCommand = command => {
    this.setLocalState(
      RichUtils.toggleInlineStyle(this.props.note, command),
      "note"
    );
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.setLocalState(newState, "note");
      return "handled";
    }
    return "not-handled";
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
    let title = convertToRaw(this.state.title.getCurrentContent());
    let note = convertToRaw(this.state.note.getCurrentContent());

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
          // type="checkbox"
          classes={{
            root: "o-samsung-checkbox",
            checked: "checked"
          }}
        />

        <Main
          {...{ ...this.props, ...this.state }}
          id={id}
          handleKeyCommand={this.handleKeyCommand}
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
