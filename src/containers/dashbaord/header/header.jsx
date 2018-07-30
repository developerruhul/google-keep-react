import React from "react";
import "./style/header.css";
import { logOut } from "../../../util/auth";
import { firebaseAuth } from "../../../config/firebase";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import AccountEdit from "./accountEdit";

class Header extends React.Component {
  state = {
    anchorEl: null,
    accountOpen: false
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpen = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  openAccount = () => {
    this.setState({ accountOpen: true });
    this.handleClose();
  };

  accountClose = () => {
    this.setState({ accountOpen: false });
  };

  logOut = () => {
    logOut();
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;

    let name;

    if (this.props.name === "star") {
      name = "Favourites";
    } else if (this.props.name === "lock") {
      name = "Lock";
    } else {
      name = this.props.name;
    }

    return (
      <header className="o-app-header">
        <section className="o-app-menu-title">
          <i onClick={this.toggleNav} className="material-icons js-app-menu">
            menu
          </i>

          <div role="heading" className="c-samsung-title">
            {this.props.name ? (
              <h1>{name}</h1>
            ) : (
              [
                <h1 key="1">Samgsung Note</h1>,
                <sup key="2" className="c-super-like">
                  Web
                </sup>
              ]
            )}
          </div>
        </section>

        <div className="o-app-header-auth">
          <div className="header-user-name">
            {firebaseAuth().currentUser.displayName}
          </div>
          <Avatar
            className="header-user-photo"
            src={firebaseAuth().currentUser.photoURL}
            alt="user"
            onClick={this.handleOpen}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.openAccount}>My account</MenuItem>
            <MenuItem onClick={this.logOut}>Logout</MenuItem>
          </Menu>
        </div>

        <AccountEdit
          open={this.state.accountOpen}
          handleClose={this.accountClose}
        />
      </header>
    );
  }

  toggleNav = () => {
    const body = document.body.classList;
    return body.toggle("hide__main__nav", !body.contains("hide__main__nav"));
  };
}

export default Header;
