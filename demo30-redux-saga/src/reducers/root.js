import { combineReducers } from "redux"
import { authenticationReducer } from "./authentication"
import { reducer as formReducer } from "redux-form"
export default combineReducers({
  authentication: authenticationReducer,
  form: formReducer
})
