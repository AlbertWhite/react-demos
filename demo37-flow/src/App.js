// @flow

import React, { Component } from 'react'
import MyClassComponent from './myClassComponent'
import MyFunctionComponent from './myFunctionComponent'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyClassComponent
          firstName={1}
          lastName={1}
          obj={{ a: 1, b: 'a', c: 'a' }}
        />
        <MyFunctionComponent a={'hello'} b={'world'} c={['1', '2']} />
      </div>
    )
  }
}

export default App
