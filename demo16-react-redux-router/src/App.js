import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>The result: {this.props.value}</div>
    );
  }
}

const mapStateToProps = (state) =>{
  console.log(state)
  return{
    value: state.value
  }
}

App = connect(mapStateToProps)(App);

export default App;


