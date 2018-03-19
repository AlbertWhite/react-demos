import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SignupScene from '../scenes/signup'
import SigninScene from '../scenes/signin'
import { getRoute, routeKeys } from '../constants/routes'

const Routes = () => (
  <Switch>
    <Route component={SignupScene} path={getRoute(routeKeys.signup)} />
    <Route component={SigninScene} path={getRoute(routeKeys.signin)} />
  </Switch>
)

export default Routes
