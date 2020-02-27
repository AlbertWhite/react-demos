import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import {
  ReduxAsyncConnect,
  asyncConnect,
  reducer as reduxAsyncConnect
} from "redux-connect";
import React from "react";
import { hydrate } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const App = props => {
  const { route } = props;
  return (
    <div>
      {props.asyncConnectKeyExample && props.asyncConnectKeyExample.name}
      {renderRoutes(route.routes)}
    </div>
  );
};

const ConnectedApp = asyncConnect([
  {
    key: "asyncConnectKeyExample",
    promise: ({ match: { params }, helpers }) =>
      Promise.resolve({
        id: 1,
        name: "value returned from promise for the key asyncConnectKeyExample"
      })
  }
])(App);

const ChildRoute = () => <div>{"child component"}</div>;

// config route
const routes = [
  {
    path: "/",
    component: ConnectedApp,
    routes: [
      {
        path: "/child",
        exact: true,
        component: ChildRoute
      }
    ]
  }
];

// config store
const store = createStore(
  combineReducers({ reduxAsyncConnect }),
  window.__data
);
window.store = store;

// Mount point
hydrate(
  <Provider store={store} key="provider">
    <BrowserRouter>
      <ReduxAsyncConnect routes={routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
