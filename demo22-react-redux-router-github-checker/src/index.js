import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>, 

document.getElementById('root'));
registerServiceWorker();
