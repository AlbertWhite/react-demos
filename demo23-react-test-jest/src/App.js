import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './component/Counter'
import Result from './component/Result'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Result/>
      </div>
    );
  }
}

export default App;
