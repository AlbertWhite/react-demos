import { put, call } from "redux-saga/effects"
import * as actionTypes from "../constants/actionTypes"
import * as actions from "../actions/authentication"
import * as api from "../services/api"
import { APT_GET_REQUEST } from "../constants/api"

export function* initAuth(action) {
  //use put to dispatch an action. use call for an api call
  yield put({ type: actionTypes.FETCH_SIGNUP_FORM.REQUEST })
}

export function* fetchSignupForm(action) {
  //use call to call a function with the second parameter as the payload for the function
  const { response, error } = yield call(api.fetchSignUp, {
    ...APT_GET_REQUEST
  })
  if (response) {
    yield put({ type: actionTypes.FETCH_SIGNUP_FORM.SUCCESS, response })
  } else if (error) {
    yield put({ type: actionTypes.FETCH_SIGNUP_FORM.ERROR, response })
  }
}

export function* fetchSignupFormSuccess(action) {
  //if other action to dispatch
  //console.log(action)
}
