import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('we are int')
  yield call(delay, 1000) //return a promise
  yield put({ type: 'INCREMENT' }) //if the last promise resolved, return to sega and excute to the next field
  //send put object to middleware to fulfill. sega is paused until put object is fullfilled
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
	//takeEvery is a helper function to listen for dispached INCREMENT_ASYNC
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga(){
	console.log('hello saga')
}

const API_CALL = (url) => {
  return fetch(url)
	.then((response)=> {console.log(response); return response.json();})
}

export function* getDataAsync() {
	console.log('123')
  const response = yield call(API_CALL, 'http://5826ed963900d612000138bd.mockapi.io/items')
  console.log(response)
  yield put({ type: 'UPDATE_ITEMS', items: response })
}

export function* watchGetDataAsync() {
  yield takeEvery('GET_DATA_ASYNC', getDataAsync)
}

export default function* rootSaga(){
	yield all([
		helloSaga(),
		watchIncrementAsync(),
		watchGetDataAsync()
	])
}