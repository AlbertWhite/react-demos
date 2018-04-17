import * as pageInitialization from "./pageInitialization"
import * as actionTypes from "../constants/actionTypes"
import { takeEvery, fork } from "redux-saga/effects"

function* watchInitPage() {
  yield takeEvery(actionTypes.INIT_AUTH, pageInitialization.initAuth)
}

function* watchFetchSignupForm() {
  yield takeEvery(
    actionTypes.FETCH_SIGNUP_FORM.REQUEST,
    pageInitialization.fetchSignupForm
  )
}

function* watchFetchSignupFormSuccess() {
  yield takeEvery(
    actionTypes.FETCH_SIGNUP_FORM.SUCCESS,
    pageInitialization.fetchSignupFormSuccess
  )
}

export default function* rootSaga() {
  yield [fork(watchInitPage)]
  yield [fork(watchFetchSignupForm)]
  yield [fork(watchFetchSignupFormSuccess)]
}
