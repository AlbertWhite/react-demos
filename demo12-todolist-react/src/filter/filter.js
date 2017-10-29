import React, { Component } from 'react';

class Filter extends Component{

  changeFilter(event,filter){
    this.props.changeFilter(filter)
    const listOfLinks = document.getElementsByTagName("a")
    for(var i = 0;i < listOfLinks.length;i++){
      listOfLinks[i].style.color="blue"
    }

    event.target.style.color="black"
  }

  render(){
    return <div>
      <a ref="all" style={{"marginRight":"10px","color":"black","textDecoration":"underline","cursor":"pointer"}} onClick={(e) => this.changeFilter(e,"all")}>All</a>
      <a ref="todo" style={{"marginRight":"10px","color":"blue","textDecoration":"underline","cursor":"pointer"}} onClick={(e) => this.changeFilter(e,"todo")}>To do</a>
      <a ref="done" style={{"marginRight":"10px","color":"blue","textDecoration":"underline","cursor":"pointer"}} onClick={(e) => this.changeFilter(e,"done")}>Done</a>
    </div>
  }
}

export default Filter;
