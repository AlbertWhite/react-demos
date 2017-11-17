import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import InputContainer from './container/InputContainer'
import UserContainer from './container/UserContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={InputContainer}></Route>
        <Route path='/:user' component={UserContainer}></Route>
      </div>
    );
  }
}

export default App;
