import React, { Component } from 'react';

class Add extends Component{

  constructor(){
    super();
    this.state = {value:""};
  }

  trackInput(event){
    this.setState({
      value: event.target.value
    });

  }

  addTodo(){
    this.props.addTodo(this.state.value);
    this.refs.input.value = "";
  }

  render(){
    return <div>
      <input ref="input" type="text" onChange={this.trackInput.bind(this)}/>
      <button onClick={this.addTodo.bind(this)}>Add todo</button>
    </div>
  }
}

export default Add;
