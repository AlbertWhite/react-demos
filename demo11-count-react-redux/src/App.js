import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Show from './show/show.js';
import Button from './button/button.js';
import './App.css';

const reducer = (state={value: 1}, action) => {
  switch(action.type){
    case "ADD": return {value: state.value+1}
    default: return state;
  }
}

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>The result: {this.props.value}</div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    value: state.value
  }
}

App = connect(mapStateToProps)(App);

export default App;
