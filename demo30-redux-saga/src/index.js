//entry file for the project
//need to implement: redux-saga, react-redux

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
import AuthenticationRoutes from './routes/authentication'
import { BrowserRouter as Router } from 'react-router'

// const sagaMiddleware = createSagaMiddleware()

const App = () => {
  return (
    <Router>
      {/* <Provider> */}
      {/* <AuthenticationRoutes /> */}
      {/* </Provider> */}
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
