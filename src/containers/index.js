import React from "react";
import "./styles/app.css";
import Header from "./header/header";
import Nav from "./nav/Nav";
import NotesContainer from "./notes/App";
import MainForm from "./editor/App";
import IDB from "../services/idb/index";
import { Snack } from "../components/snackbar/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <main className="js-wrapper">
        <Header name={this.props.header} />
        <Nav />

        <main className="o-main">
          <div className="o-main-layout">
            <MainForm />
            <NotesContainer />
          </div>
        </main>

        {/* dispatching SHOW_SNACK will cause this snack to appear--
                 [message delete successful] and other */}
        <Snack
          open={this.props.snack.open}
          handleClose={this.props.closeSnack}
          message={this.props.snack.message}
        />

        {/* IDB Database declarative style */}
        <IDB />
      </main>
    );
  }
}

const mapDispatchToProps = d => ({
  closeSnack: _ => d({ type: "MODIFY_SNACK", bool: false, message: "" })
});

const mapStateToProps = ({ snack, route: { name } }) => ({
  snack,
  header: name
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
