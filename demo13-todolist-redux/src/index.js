import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Redux, { createStore } from 'redux';
import reducer from './reducer.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const render = () => {
  ReactDOM.render(<App
    addTodo={store.dispatch({type:"ADD", content})}
    removeTodo={store.dispatch({type:"REMOVE"})}
    changeFilter={store.dispatch({type:"CHANGE"})}
    list={store.getState().list}
  />, document.getElementById('root'));
}

render();
store.subsribe(render);

registerServiceWorker();
