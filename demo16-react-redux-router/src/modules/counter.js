import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component{

  addValue(){
    this.props.addValue();
  }

  render(){
    return(
      <div>
        <button onClick={this.addValue.bind(this)}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addValue: ()=>{
      dispatch({
        type: "ADD"
      })
    }
  }
}

Counter = connect(null, mapDispatchToProps)(Counter);

export default Counter;
