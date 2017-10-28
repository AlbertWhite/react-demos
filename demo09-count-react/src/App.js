import React, { Component } from 'react';
import Show from './show/show.js';
import Button from './button/button.js';
import './App.css';

class App extends Component {

  constructor(){
    super(); //must add super()
    this.state = {count: 0};
  }

  addCount(){
    this.setState({ //setState({})
      count: this.state.count + 1 //cannot be this.state.count++
    });
  }

  render() {
    return (
      <div className="App">
        <Show countTimes={this.state.count}/>
        <Button addCount={this.addCount.bind(this)}/>
      </div>
    );
  }
}

export default App;
