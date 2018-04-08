import * as actionTypes from "../constants/actionTypes"
import actionCreator from "../helpers/actionCreator"

export const initAuthentication = response =>
  actionCreator(actionsTypes.INIT_AUTH, response)
