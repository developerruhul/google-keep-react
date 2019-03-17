import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from "./util/AsyncFunc";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/dashboard"
            component={asyncComponent(() => import("./containers"))}
          />
          <Route render={() => <Redirect to="/dashboard" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
