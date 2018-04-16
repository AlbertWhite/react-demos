const createRequestActionType = ACTION_TYPE => {
  return {
    REQUEST: `${ACTION_TYPE}_REQUEST`,
    SUCCESS: `${ACTION_TYPE}_SUCCESS`,
    FAILURE: `${ACTION_TYPE}_FAILURE`
  }
}

export const INIT_AUTH = "INIT_AUTH"
export const FETCH_SIGNUP_FORM = createRequestActionType("FETCH_SIGNUP_FORM")
