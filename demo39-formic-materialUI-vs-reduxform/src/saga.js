import { takeLatest, all } from 'redux-saga/effects'
import { submitForm } from './action'
function* watchSubmit() {
  yield takeLatest(submitForm, submit)
}

function* submit() {
  // fetch('https://5a7ae1d9fb057400128504a5.mockapi.io/user', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     gender: values.gender,
  //     name: values.name,
  //     password: values.password
  //   })
  // })
  //   .then(res => {
  //     if (res.ok) {
  //       setSubmitting(false)
  //     }
  //   })
  //   .catch(res => {
  //     setSubmitting(false)
  //   })
  debugger
}

export default function* rootSaga() {
  yield all([watchSubmit])
}
