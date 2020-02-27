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
  const { route, asyncConnectKeyExample } = props; // access data from asyncConnect as props
  return (
    <div>
      {asyncConnectKeyExample && asyncConnectKeyExample.name}
      {renderRoutes(route.routes)}
    </div>
  );
};

// Conenect App with asyncConnect
const ConnectedApp = asyncConnect([
  // API for ayncConnect decorator: https://github.com/makeomatic/redux-connect/blob/master/docs/API.MD#asyncconnect-decorator
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

// Config store
const store = createStore(
  combineReducers({ reduxAsyncConnect }), // Connect redux async reducer
  window.__data
);
window.store = store;

// App Mount point
hydrate(
  <Provider store={store} key="provider">
    <BrowserRouter>
      {/** Render `Router` with ReduxAsyncConnect middleware */}
      <ReduxAsyncConnect routes={routes} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
