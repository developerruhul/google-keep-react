import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PublicRoute, ProtectedRoute } from "./util/route";
import { firebaseAuth } from "./config/firebase";
import asyncComponent from "./util/AsyncFunc";

class Router extends React.Component {
  state = {
    loggedIn: false
  };

  componentDidMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: user });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <PublicRoute
              exact
              authed={this.state.loggedIn}
              path="/login"
              component={asyncComponent(_ => import("./containers/login"))}
            />
            <PublicRoute
              exact
              authed={this.state.loggedIn}
              path="/signup"
              component={asyncComponent(_ => import("./containers/signup"))}
            />
            <ProtectedRoute
              authed={this.state.loggedIn}
              path="(/dashboard|/)"
              component={asyncComponent(_ => import("./containers/dashbaord"))}
            />
            <Route render={_ => <Redirect to="/dashboard" />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
