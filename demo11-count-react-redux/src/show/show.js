import React, { Component } from  'react';
import { connect } from 'react-redux';

class Show extends Component{
  render(){
    return  <div>
      You have counted: {this.props.value}
    </div>
  }
}

const mapStateToProps = (state)=>{
  return {
    value: state.value
  }
}

Show = connect(mapStateToProps)(Show);

export default Show;


