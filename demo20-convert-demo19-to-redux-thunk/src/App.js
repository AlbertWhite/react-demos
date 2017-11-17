import React, { Component } from 'react';
import './App.css';

import { fetchItem } from './actions'
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {

    if (this.props.hasError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {
          this.props.items.map((item) => {
            //remember to return in .map
            return(
              <li key={item.id}>
                {item.label}
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToPros = (state) => {
  return{
    //state.reducername. remember we have already use seperated reducers
    items: state.itemReducer,
    hasError: state.itemErrorRedcer,
    isLoading: state.itemLoadingReducer
  }
}

const mapDispatchToPros = (dispatch) => {
  return{
    //remember in the right part, define a function (input) => {dispatch(action)(input)}
    fetchData: (url) => {dispatch(fetchItem(url))}
  }
}

App = connect(mapStateToPros, mapDispatchToPros)(App)

export default App;
