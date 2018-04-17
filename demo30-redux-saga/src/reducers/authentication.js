import * as ActionTypes from "../constants/actionTypes"

export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SIGNUP_FORM.SUCCESS:
      return {
        ...state,
        signup: action.response
      }
    default:
      return state
  }
}
