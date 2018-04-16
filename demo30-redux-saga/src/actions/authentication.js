import * as actionTypes from "../constants/actionTypes"
import actionCreator from "../helpers/actionCreator"

export const initAuthentication = response =>
  actionCreator(actionTypes.INIT_AUTH, response)

export const fetchSignupForm = {
  request: () => actionCreator(actionTypes.FETCH_SIGNUP_FORM.REQUEST),
  success: data => actionCreator(actionTypes.FETCH_SIGNUP_FORM.SUCCESS),
  failure: error => actionCreator(actionTypes.FETCH_SIGNUP_FORM.FAILURE)
}
