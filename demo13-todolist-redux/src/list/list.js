import React, { Component } from 'react';

class List extends Component{

  render(){
    return <div>
      <ul>
        {this.props.list.map((item) => {
          <li>{item.content}</li>
        })}
      </ul>
    </div>
  }
}

export default List;
