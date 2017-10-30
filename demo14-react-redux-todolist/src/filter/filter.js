import React, { Component } from 'react';
import { connect } from 'react-redux';

class Filter extends Component{

  changeFilter(event, filter){
    this.props.changeFilter(filter);
    const listOfElements = document.getElementsByTagName("a");
    for(let e of listOfElements){
      e.style.color="blue"
    }
    event.target.style.color="black"
  }

  render(){
    //inside style is an object of styles
    return <div>
      <a style={{marginRight: "10px", color: "black", textDecoration:"underline", cursor:"pointer"}} onClick={(event)=>{this.changeFilter(event, "all")}}>All</a>
      <a style={{marginRight: "10px", color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={(event)=>{this.changeFilter(event, "todo")}}>Todo</a>
      <a style={{marginRight: "10px", color: "blue", textDecoration:"underline", cursor:"pointer"}} onClick={(event)=>{this.changeFilter(event, "done")}}>Done</a>
    </div>
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
   changeFilter: (filter) => {
      dispatch({
        type: "CHANGE",
        content: filter
      })
    }
  }
}

Filter = connect(null, mapDispatchToProps)(Filter);
export default Filter;
