import React, { Component } from 'react';
import List from './list/list.js';
import Filter from './filter/filter.js';
import Add from './add/add.js';

class App extends Component {

  constructor(){
    super();
    this.state = {list: [], filter: "all"};
  }

  addTodo(item){
    const newTodo = {"content":item, "filter":"todo"}
    this.setState({
      list: this.state.list.concat(newTodo)
    });
  }

  changeFilter(filter){
    this.setState({
      filter: filter
    });
  }

  removeItem(value){

    const newList = this.state.list.map((item) => {
      if(item.content === value){
        item.filter = "done"
      }
      return item;
    })

    console.log(newList)

    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div className="App">
        <Add addTodo={this.addTodo.bind(this)}/>
        <Filter changeFilter={this.changeFilter.bind(this)}/>
        <List list={this.state.list} filter={this.state.filter} removeItem={this.removeItem.bind(this)}/>
      </div>
    );
  }
}

export default App;
