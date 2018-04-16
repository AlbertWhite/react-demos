//entry file for the project
//need to implement: redux-saga, react-redux

import "babel-polyfill"

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/index"
import AuthenticationRoutes from "./routes/authentication"
import { BrowserRouter as Router } from "react-router-dom"
import * as actions from "./actions/authentication"
import rootReducer from "../src/reducers/root"

const sagaMiddleware = createSagaMiddleware()
const middleWares = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, middleWares)
store.runSaga = sagaMiddleware.run

store.runSaga(rootSaga)

store.dispatch(actions.initAuthentication({}))

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <AuthenticationRoutes />
      </Provider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
