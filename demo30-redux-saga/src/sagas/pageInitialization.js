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
  console.log("fetch billing address")
  //use call to call a function with the second parameter as the payload for the function
  yield call(api.fetchSignUp, {
    ...APT_GET_REQUEST
  })
}
