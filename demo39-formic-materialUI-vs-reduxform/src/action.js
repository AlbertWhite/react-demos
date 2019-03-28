function action(type, payload = {}) {
  return { type, ...payload }
}

export const submitWithFormik = payload =>
  action('SUBMIT_WITH_FORMIK', { payload })

export const submitWithReduxForm = payload =>
  action('SUBMIT_WITH_REDUX_FORM', { payload })
