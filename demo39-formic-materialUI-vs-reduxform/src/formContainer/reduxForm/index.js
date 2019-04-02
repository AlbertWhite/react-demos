import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { selfValidation } from '../../validation/selfValidation'
import { submitWithReduxForm } from '../../action'
import Input from '../../formComponent/native/Input'
import Radio from '../../formComponent/native/Radio'
import Button from '../../formComponent/native/Button'
import './index.scss'

const formSubmit = (values, dispatch) => {
  dispatch(submitWithReduxForm(values))
}

const Form = ({ handleSubmit }) => {
  return (
    <form className="reduxForm" onSubmit={handleSubmit(formSubmit)}>
      <h3>reduxform + native form component (without library)</h3>
      <Field
        component={Radio}
        name="gender"
        label="Gender"
        items={[{ value: '1', label: 'Female' }, { value: '2', label: 'Male' }]}
      />
      <Field component={Input} type="text" name="name" label="Name" />
      <Field type="text" component={Input} name="password" label="Password" />
      <Field component={Button} type="submit" text="SIGN UP" />
    </form>
  )
}

export default reduxForm({ form: 'someForm', validate: selfValidation })(Form)
