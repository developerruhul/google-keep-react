import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PublicRoute, ProtectedRoute } from "./util/route";
import Login from "./containers/login";
import Dashboard from "./containers/dashbaord";
import SignUp from "./containers/signup";
import { firebaseAuth } from "./config/firebase";

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
              component={Login}
            />
            <PublicRoute
              exact
              authed={this.state.loggedIn}
              path="/signup"
              component={SignUp}
            />
            <ProtectedRoute
              exact
              authed={this.state.loggedIn}
              path="(/dashboard|/)"
              component={Dashboard}
            />
            <Route render={_ => <Redirect to="/dashboard" />} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
