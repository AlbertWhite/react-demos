import React, { Component } from 'react'
import "./button.css"

class Button extends Component{

  addCount(){
    this.props.addCount();
  }

  render (){
    return <div>
      <button onClick={this.addCount.bind(this)}>Click to add count</button>
    </div>
  }
}

export default Button;
