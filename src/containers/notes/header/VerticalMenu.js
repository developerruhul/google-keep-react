import React from "react";
import { Menu, MenuItem, IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

class VerticalMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpen = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  delete = () => {
    this.props.delete();
    this.handleClose();
  };

  move = () => {
    this.props.move();
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <IconButton
          className="mobile-more-menu hide-in-desktop"
          aria-label="More"
          aria-owns={anchorEl ? "long-menu" : null}
          aria-haspopup="true"
          onClick={this.handleOpen}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.delete}>DELETE</MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
}

export default VerticalMenu;
