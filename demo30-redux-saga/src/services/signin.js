import { SubmissionError } from "redux-form"
import { API_POST_REQUEST } from "../constants/api"
import * as api from "./api"
import { getRoute, routeKeys } from "../constants/routes"

/* global window */

const submit = (values, dispatch, props) => {
  const state = window.store.getState()
  const data = {
    ...values
  }

  const payload = {
    ...API_POST_REQUEST,
    options: {
      ...API_POST_REQUEST.options,
      body: JSON.stringify(data),
      headers: {
        ...API_POST_REQUEST.options.headers
      }
    }
  }

  return api.signin(payload).then(({ error, response }) => {
    if (error) {
      let errorMessage = ""
      if (response.displayCaptcha) {
        dispatch(showCaptcha(response.displayCaptcha))
        if (response.errorMessage.form) {
          ;[errorMessage] = response.errorMessage.form
          throw new SubmissionError({ _error: errorMessage })
        } else if (response.errorMessage["loginViewModel.CaptchaResponse"]) {
          ;[errorMessage] = response.errorMessage[
            "loginViewModel.CaptchaResponse"
          ]
          throw new SubmissionError({ _error: errorMessage })
        }
      } else if (response.errorMessage.form) {
        ;[errorMessage] = response.errorMessage.form
        throw new SubmissionError({ _error: errorMessage })
      }
    } else {
      const route = getRoute(routeKeys.index)
      location.replace(route)
    }
  })
}

export default submit
