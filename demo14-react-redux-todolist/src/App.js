import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Add from './add/add.js';
import List from './list/list.js';
import Filter from './filter/filter.js';

const reducer = (state={list:[], filter:"all"}, action) => {
  switch(action.type){
    case "ADD":
      return {...state, list: state.list.concat({"content":action.content,"type":"todo"})}
    case "CHANGE":
      return {...state, filter: action.content}
    case "REMOVE":
      const newList = state.list.map((item)=>{
        if(item.content === action.content){
          item.type="done";
        }
        return item;
      })
      return {...state, list: newList}

    default:
      return state;
  }
}
const store = createStore(reducer);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Add/>
          <Filter/>
          <List/>
        </div>
      </Provider>
    );
  }
}

export default App;
