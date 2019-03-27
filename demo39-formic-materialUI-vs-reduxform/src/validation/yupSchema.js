import * as Yup from 'yup'

export default Yup.object().shape({
  gender: Yup.string().required('Gender is required.'),
  name: Yup.string().required('Name is required.'),
  password: Yup.string().required('Password is required.')
})
