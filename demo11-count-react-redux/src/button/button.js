import React, { Component } from  'react';
import { connect } from 'react-redux';

class Button extends Component{

  addValue(){
    this.props.addCount();
  }

  render(){
    return <button onClick={this.addValue.bind(this)}>Click to add</button>
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    addCount:()=>{
      dispatch({
        type: "ADD"
      })
    }
  }
}

Button = connect(null, mapDispatchToProps)(Button); //if the first arguement is null, state it as null

export default Button;
