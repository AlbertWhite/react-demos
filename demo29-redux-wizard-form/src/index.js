import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

import { createStore, combineReducers } from 'redux';
import { reducer as uiReducer } from 'redux-ui';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const combinedReducer = combineReducers({ui: uiReducer, form: formReducer});
const store = createStore(combinedReducer);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Form />
		</div>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
