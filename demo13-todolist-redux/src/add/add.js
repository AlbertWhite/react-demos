import React, { Component } from 'react';

class Add extends Component{

  addTodo(){
    const input = document.getElementByTagName("input")[0];
    const todo = input.value;
    this.props.addTodo({type:"ADD", content:todo});
  }

  render(){
    return <div>
      <input type="text"/>
      <button onClick={this.addTodo.bind(this)}></button>
    </div>
  }
}

export default Add;
