import BrowserRouter from "react-router-dom/BrowserRouter";
import renderRoutes from "react-router-config/renderRoutes";
import {
  ReduxAsyncConnect,
  asyncConnect,
  reducer as reduxAsyncConnect
} from "redux-connect";
import React from "react";
import { hydrate } from "react-dom";
import { createStore, combineReducers } from "redux";

// 1. Connect your data, similar to react-redux @connect
const App = props => {
  // 2. access data as props
  const { lunch, route } = props;
  return (
    <div>
      {lunch.name}
      {renderRoutes(route.routes)}
    </div>
  );
};

class Child extends React.component {
  render() {
    return <div>{"child component"}</div>;
  }
}

const routes = [
  {
    path: "/",
    component: App,
    routes: [
      {
        path: "/child",
        exact: true,
        component: Child
      }
    ]
  }
];

// 2. Connect redux async reducer
const store = createStore(
  combineReducers({ reduxAsyncConnect }),
  window.__data
);

// 3. Render `Router` with ReduxAsyncConnect middleware
hydrate(
  <Provider store={store} key="provider">
    <BrowserRouter>
      <ReduxAsyncConnect routes={routes} helpers={helpers} />
    </BrowserRouter>
  </Provider>,
  el
);

export default asyncConnect([
  {
    key: "lunch",
    promise: ({ match: { params }, helpers }) =>
      Promise.resolve({ id: 1, name: "Borsch" })
  }
])(App);
