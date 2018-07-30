import React from "react";
import "./style/styles.css";
import EditButton from "./components/editbtn";
import HeaderActions from "./components/headerActions";

class Header extends React.Component {
  render() {
    const { toggleEditMode, ...other } = this.props;

    return (
      <header className="o-notes-header">
        <h1 className="o-notes-header-title">NOTES</h1>
        <EditButton toggle={toggleEditMode} />
        <HeaderActions toggleEditMode={toggleEditMode} {...other} />
      </header>
    );
  }
}

export default Header;
