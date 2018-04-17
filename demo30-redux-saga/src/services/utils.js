import "whatwg-fetch"
import { apiRoute } from "../constants/path.js"

//Chrome does not support localhost for CORS requests
export function callApi(endpoint, payload) {
  const fullUrl = apiRoute + endpoint
  const opts = typeof payload !== "undefined" ? payload.options : {}

  //fetch function, second parameter includes body content and request headers
  return new Promise((resolve, reject) =>
    fetch(fullUrl, opts)
      .then(response => {
        const bodyLength = response.headers.get("Content-Length")
        if (
          response.status !== 200 ||
          (bodyLength !== null && bodyLength <= 0)
        ) {
          if (response.ok) {
            return resolve({ response: {}, error: null })
          }

          if (response.status === 401 || response.status === 400) {
            const error = new Error(response.statusText || response.status)
            if (bodyLength !== null && bodyLength <= 0) {
              return resolve({ error, response: null })
            }
            return response
              .json()
              .then(json => resolve({ error, response: json }))
          }

          const error = new Error(`status: ${response.status}`)
          return resolve({ error, statusCode: response.status })
        }

        return response.json().then(json => {
          if (!response.ok) {
            resolve({ error: json, response: null })
          }
          return resolve({ response: json, error: null })
        })
      })
      .catch(err => resolve({ error: err }))
  )
}
