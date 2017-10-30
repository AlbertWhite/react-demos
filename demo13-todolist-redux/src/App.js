import React, { Component } from 'react';
import Add from './add/add.js';
import List from './list/list.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add addTodo={this.props.addTodo}/>
        <List list={this.props.list}/>
      </div>
    );
  }
}

export default App;
