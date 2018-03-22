import React from "react"
import { Route, Switch } from "react-router-dom"

import SignupComponent from "../components/signup"
import SigninScene from "../scenes/signin"
import SignupScene from "../components/signup"
import { getRoute, routeKeys } from "../constants/routes"

const Routes = () => (
  <Switch>
    <Route path="/signup" component={SignupComponent} />
    <Route component={SignupScene} path={getRoute(routeKeys.signup)} />
    <Route component={SigninScene} path={getRoute(routeKeys.signin)} />
  </Switch>
)

export default Routes
