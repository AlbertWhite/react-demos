export const selfValidation = (values, props) => {
  console.log({ values })
  const errors = {}
  const fields = ['name', 'gender', 'password']
  fields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field} is required.`
    }
  })

  return errors
}
