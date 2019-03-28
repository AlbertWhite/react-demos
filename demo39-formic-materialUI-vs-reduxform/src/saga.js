import { takeLatest, all, call } from 'redux-saga/effects'
function* watchSubmitFormik() {
  yield takeLatest('SUBMIT_WITH_FORMIK', submitFormik)
}

const callApiPost = (url, payload) => {
  /* 
     Why we create callApi in this way, because in the 'call' function is redux-saga:
    https://redux-saga.js.org/docs/api/
    "
      If `fn` is a normal function and returns a Promise, 
      the middleware will suspend the Generator until the Promise is settled. 
      After the promise is resolved the Generator is resumed with the resolved value, 
      or if the Promise is rejected an error is thrown inside the Generator.
    "
  */

  return new Promise(resolve => {
    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }

    return fetch(url, opts)
      .then(res => {
        return res.json().then(json => {
          resolve({ response: json })
        })
      })
      .catch(error => {
        return resolve({ error })
      })
  })
}

function* submitFormik(action) {
  const { setSubmitting, setErrors, values } = action.payload
  const { response, error } = yield call(
    callApiPost,
    'https://5a7ae1d9fb057400128504a5.mockapi.io/user',
    values
  )
  yield call(setSubmitting, false)
  if (response.err) {
    // in formik, error handling is not dynamic. We need to inject it.
    yield call(setErrors, { general: response.err })
  }
}

export default function* rootSaga() {
  yield all([watchSubmitFormik()])
}
