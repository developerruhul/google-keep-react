import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ authed, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export const PublicRoute = ({ authed, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
