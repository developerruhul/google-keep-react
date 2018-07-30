import React from "react";
import {
  Dialog,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class AccountEdit extends React.Component {
  render() {
    return (
      <Dialog
        fullScreen
        open={this.props.open}
        onClose={this.props.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar style={{position: 'relative'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={this.props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography style={{ flex: 1 }} variant="title" color="inherit">
              Sound
            </Typography>
            <Button color="inherit" onClick={this.props.handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    );
  }
}
