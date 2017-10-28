import React, { Component } from 'react'; //react is default export
import './App.css';

class App extends Component {

  addCount(){
    this.props.addCount();
  }

  render() {
    return (
      <div className="App">
        You have counted: {this.props.value}
        <button onClick={this.addCount.bind(this)}>add count</button>
      </div>
    );
  }
}

export default App;
