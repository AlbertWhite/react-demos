// @flow

import React, { Component } from 'react'
import MyClassComponent from './myClassComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyClassComponent firstName={1} lastName={1} />
      </div>
    )
  }
}

export default App
