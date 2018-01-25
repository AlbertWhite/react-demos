import React, { Component } from 'react';
import { OnMobile, OnDesktop } from './helper'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <OnMobile>
          Displayed on mobile layout only
        </OnMobile>

        <OnDesktop>
          Displayed on desktop layout only
        </OnDesktop>
      </div>
    );
  }
}

export default App;
