import React, { Component } from 'react';
import { connect } from 'react-redux';

class Add extends Component{

  addTodo(){
    const input = document.getElementsByTagName("input")[0];
    const todo = input.value;
    input.value = "";
    this.props.addTodo(todo);
  }

  render(){
    return <div>
      <input type="text"/>
      <button onClick={this.addTodo.bind(this)}>Add Todo</button>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo)=>{
      dispatch({
        type: "ADD",
        content: todo
      })
    }
  }
}

Add = connect(null, mapDispatchToProps)(Add);

export default Add;
