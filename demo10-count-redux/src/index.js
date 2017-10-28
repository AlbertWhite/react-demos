import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import Reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducer);//createStore from Redux

const render = () => {
  ReactDOM.render(<App
    value = {store.getState().value}//store.getState for get value
    addCount = {()=>{store.dispatch({type: 'ADD'})}}//store.dispatch for change value in reducer
  />, document.getElementById('root'));
}
render();
store.subscribe(render);//render must be subscried in store

registerServiceWorker();
