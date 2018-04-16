import { combineReducers } from "redux"
import authenticationReducer from "./authentication"
export default combineReducers({
  authentication: authenticationReducer
})
