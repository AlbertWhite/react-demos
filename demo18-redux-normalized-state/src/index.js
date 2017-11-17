import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

import { fetchProducts } from './actions'

/*before adding logger to applyMiddleware,
we can use process.env.NODE_ENV to determine whether it is in production
check the example in: https://github.com/reactjs/redux/blob/master/examples/shopping-cart/src/index.js
*/

const store = createStore(
	reducer,
	applyMiddleware(thunk, logger)
)

store.dispatch(fetchProducts('https://5a0dc4bae4200e001255256f.mockapi.io/products'))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
