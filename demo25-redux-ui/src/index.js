import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithUI from './App';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

//step1: need to import uiReducer
import { reducer as uiReducer } from 'redux-ui';

import registerServiceWorker from './registerServiceWorker';

const combinedReducer = combineReducers({ui: uiReducer});

const store = createStore(combinedReducer);

ReactDOM.render(
	<Provider store={store}>
		<AppWithUI />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
