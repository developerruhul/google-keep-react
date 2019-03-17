import React from "react";
import { connect } from "react-redux";
import { Checkbox } from "@material-ui/core";
import VerticalMenu from "./VerticalMenu";

class HeaderActions extends React.Component {
  resetAndCancel = () => {
    this.props.toggleEditMode();
    this.props.resetNote();
  };

  category = () => {
    let keys = Object.keys(this.props.checkedNotesId);

    if (keys.some(item => this.props.checkedNotesId[item] === true)) {
      this.props.changeCategoryInterfaceMode();
    } else if (this.props.categoryEditMode) {
      this.props.changeCategoryInterfaceMode();
    } else {
      alert("No note is selected");
    }
  };

  deleteNoteWithNoti = () => {
    let keys = Object.keys(this.props.checkedNotesId);

    if (keys.some(item => this.props.checkedNotesId[item] === true)) {
      this.props.showSnack();
      this.props.deleteNote();
    } else {
      alert("No note is selected");
    }
  };

  render() {
    const { onChange, checked } = this.props;

    return (
      <div className="js-notes-selected-actions">
        <label
          role="button"
          className="o-notes-header-btn c-notes-select-toggle"
        >
          <span>All</span>
          <Checkbox
            classes={{
              root: "o-samsung-checkbox",
              checked: "checked"
            }}
            onChange={onChange}
            checked={checked}
          />
        </label>

        <div
          onClick={this.category}
          role="button"
          className="o-notes-header-btn hide-in-mobile"
        >
          MOVE
        </div>
        <div
          onClick={this.deleteNoteWithNoti}
          role="button"
          className="o-notes-header-btn hide-in-mobile"
        >
          DELETE
        </div>
        <div
          onMouseDown={this.resetAndCancel}
          role="button"
          className="o-notes-header-btn"
        >
          CANCEL
        </div>

        <VerticalMenu delete={this.deleteNoteWithNoti} move={this.category} />
      </div>
    );
  }
}

const mapDispatch = d => ({
  showSnack: _ =>
    d({
      type: "MODIFY_SNACK",
      bool: true,
      message: <b>DELETED SUCCESSFULLY</b>
    })
});

export default connect(
  undefined,
  mapDispatch
)(HeaderActions);
