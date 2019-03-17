import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

import { actions as editorActions } from "reducers/editor/notes";
import { actions as noteActions } from "reducers/notes";
import { actions as categoryActions } from "reducers/category";

import NoteCreator from "./components/noteCreator";
import NotFound from "components/notFound/index";
import Header from "./header/header";
import "./styles/notes.css";

const { deleteNote, changeNotesTo } = editorActions;
const { addCategory } = categoryActions;
const {
  extractIdFromNotes,
  toggleAll,
  toggleNote,
  toggleActiveNote,
  toggleEditMode,
  changeCategoryEditMode
} = noteActions;

class NotesContainer extends React.Component {
  render() {
    const props = this.props;
    const noteOverlayClass = this.props.activeNote ? "active" : "";
    const categoryAnimClass = this.props.categorycditMode ? "opened" : "";

    return (
      <div ref={e => (this.parent = e)} className="o-notes-container">
        <Header
          {...props}
          toggleEditMode={this.toggleEditMode}
          onChange={() => props.toggleAll(props)}
          checked={props.checkAll}
          deleteNote={() => props.deleteNote(props)}
        />

        <div
          className={`category-picker-interface collapse ${categoryAnimClass}`}
        >
          <header>
            <h1>Select a category</h1>

            <form
              onSubmit={this.addCategoryFromInterface}
              className="add-category-interface"
            >
              <input
                ref={e => (this.categoryInput = e)}
                type="text"
                placeholder="Add a new one"
              />
              <i
                onClick={this.addCategoryFromInterface}
                title="Add category"
                className="material-icons"
              >
                add
              </i>
            </form>
          </header>

          <div className="category-wrapper">
            {props.category.map(item => (
              <div
                onClick={_ => this.categoryMove(item)}
                key={item}
                className="category-picker-category"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          onMouseDown={this.makeNoteInActive}
          id="activeNoteOverlay"
          className={`active-note-overlay ${noteOverlayClass}`}
        />

        <Switch>
          <Route
            path="/dashboard/:filter/:name"
            render={e => (
              <NoteCreator
                {...this.props}
                clickOnNote={this.props.dispatchWithID}
                activeNoteClass={this.props.activeNote}
                filter={e.match.params}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={e => (
              <NoteCreator
                {...this.props}
                clickOnNote={this.props.dispatchWithID}
                activeNoteClass={this.props.activeNote}
                filter={e.match.params}
              />
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }

  //------------ making active note-----------------
  makeNoteInActive = () => {
    window.globalUtil.makeNoteInActive.apply(this);
  };

  handleClose = () => {
    this.setState({ snackbar: false });
  };

  // extract and store the id from every note object
  // to keep track of selected notes
  componentWillReceiveProps({ notes }) {
    let nextKey = Object.keys(notes).length,
      oldKey = Object.keys(this.props.notes).length;

    if (oldKey !== nextKey) {
      this.props.extractIdFromNotes(notes);
    }
  }

  // toggle `js-edit-mode` class on the parent
  // to toggle edit mode
  toggleEditMode = () => {
    this.props.toggleEditMode();
    const classList = this.parent.classList;
    classList.toggle("js-edit-mode", this.props.editModef);
  };

  // ------------move note interface----------
  addCategoryFromInterface = e => {
    e.preventDefault();

    this.props.addCategory(this.categoryInput.value);
    this.categoryInput.value = "";
  };

  categoryMove = name => {
    let ids = Object.keys(this.props.checkedNotesId).filter(
      item => this.props.checkedNotesId[item]
    );

    this.props.moveNotesTo(name, ids);
    this.props.changeCategoryInterfaceMode();
    this.props.showSnack(
      <span>
        Moved successfully to `<b>{name}</b>`
      </span>
    );
  };
}

window.globalUtil = {
  makeNoteInActive() {
    if (!this.props.editMode) {
      document.getElementById("activeNoteOverlay").classList.remove("active");
      document.getElementById(this.props.activeNote).classList.remove("active");
      this.props.dispatchWithID(false);
    }
  }
};

const stateToProps = ({
  editor: { notes },
  notes: { checkedNotesId, editMode, checkAll, activeNote, categoryEditMode },
  category
}) => ({
  notes,
  checkedNotesId,
  editMode,
  checkAll,
  activeNote,
  category,
  categoryEditMode
});

const dispatchToProps = dispatch => ({
  extractIdFromNotes: _ => dispatch(extractIdFromNotes(_)),
  toggleAll: _ => dispatch(toggleAll(_)),
  toggleNote: _ => dispatch(toggleNote(_)),
  deleteNote: _ => dispatch(deleteNote(_)),
  dispatchWithID: _ => dispatch(toggleActiveNote(_)),
  toggleEditMode: _ => dispatch(toggleEditMode()),
  addCategory: _ => dispatch(addCategory(_)),
  resetNote: _ => dispatch({ type: "RESET_NOTE" }),
  changeCategoryInterfaceMode: _ => dispatch(changeCategoryEditMode()),
  moveNotesTo: (name, ids) => dispatch(changeNotesTo(name, ids)),
  showSnack: _ => dispatch({ type: "MODIFY_SNACK", bool: true, message: _ })
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps
  )(NotesContainer)
);
