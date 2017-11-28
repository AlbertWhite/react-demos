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

export default function* rootSaga(){
	yield all([
		helloSaga(),
		watchIncrementAsync()
	])
}