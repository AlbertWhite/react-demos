import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './modules/counter.js';

const reducer = (state={value: 0}, action) => {
  switch(action.type){
    case "ADD":
      return {value: state.value+1};
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Result</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        <Route exact path="/" component={App}/>
        <Route path="/counter" component={Counter}/>
      </div>
    </Router>
  </Provider>

, document.getElementById('root'));
registerServiceWorker();
