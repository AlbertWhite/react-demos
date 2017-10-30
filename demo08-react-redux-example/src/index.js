import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {...state, themeColor: action.themeColor}
    default:
      return state
  }
}

const store = createStore(themeReducer);

const App = () => {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
}

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(
  <ProviderApp/>,
  document.getElementById('root')
)
