import React from "react"
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.getItem("log") ? (
        <Redirect to="/register" />
      ) : (
        <Component {...props} />
      )
    }
  />
)


export default (PrivateRoute)