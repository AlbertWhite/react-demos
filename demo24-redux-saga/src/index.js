import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './saga'

import Counter from './Counter'
import reducer from './reducers'

//create sagaMiddleware with the function
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	reducer, 
	applyMiddleware(sagaMiddleware)//add sagaMiddleware into the applyMiddleware
)

//run the sagaMiddleware function
sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().number}
      items={store.getState().items}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    	onIncrementAsync={
    		//unlike redux-thunk, not dispatch a callback dispatch function, but dispatch an object
    		()=> action('INCREMENT_ASYNC')
    	}
      getDataAsync={()=> action('GET_DATA_ASYNC')}/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)