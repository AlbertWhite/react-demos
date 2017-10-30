import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component{

  removeItem(e){
    this.props.removeItem(e.target.textContent);
  }

  render(){
    const filteredList = this.props.list.filter((item)=>{
      if(this.props.filter === "all"){
        return true;
      }else{
        return item.type === this.props.filter;
      }
    });

    return <ul>
      {filteredList.map((item)=>{
        return <li key={item.content.toString()} onClick={(e) => {this.removeItem(e)}}>{item.content}</li>
      })}
    </ul>
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (content) => {
      dispatch({
        type:"REMOVE",
        content:content
      })
    }
  }
}

List = connect(mapStateToProps, mapDispatchToProps, null)(List)

export default List;
