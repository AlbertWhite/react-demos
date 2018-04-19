import React from "react"
import { Route, Switch } from "react-router-dom"

import SigninScene from "../scenes/signin"
import IndexScene from "../scenes/index"
import { getRoute, routeKeys } from "../constants/routes"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={SigninScene} />
    <Route exact component={IndexScene} path={getRoute(routeKeys.index)} />
  </Switch>
)

export default Routes
