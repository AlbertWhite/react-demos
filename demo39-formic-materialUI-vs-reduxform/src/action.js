function action(type, payload = {}) {
  return { type, ...payload }
}

export const submitForm = payload => action('SUBMIT_FORM', { payload })
