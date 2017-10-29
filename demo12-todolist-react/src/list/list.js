import React, { Component } from 'react';

class List extends Component {

  removeItem(event){
    this.props.removeItem(event.target.textContent);
  }

  render(){
    const filteredList = this.props.list.filter((item) => {
        if(this.props.filter === "all"){
          return true;
        }else{
          return item.filter === this.props.filter;
        }
    })

    return <div>
      <ul>
      {
        filteredList.map((item) => {
          return <li key={item.content.toString()} onClick={this.removeItem.bind(this)}>{item.content}</li>
        })
      }
      </ul>
    </div>
  }

}

export default List;
