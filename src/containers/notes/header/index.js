import React from "react";
import HeaderActions from "./headerActions";
import "./styles.css";

class Header extends React.Component {
  render() {
    const { toggleEditMode, ...other } = this.props;

    return (
      <header className="o-notes-header">
        <h1 className="o-notes-header-title">NOTES</h1>
        <div
          onMouseDown={toggleEditMode}
          role="button"
          className="o-notes-header-btn js-note-edit"
        >
          EDIT
        </div>

        <HeaderActions toggleEditMode={toggleEditMode} {...other} />
      </header>
    );
  }
}

export default Header;
