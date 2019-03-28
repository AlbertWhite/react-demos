import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { selfValidation } from '../../validation/selfValidation'
import { submitWithReduxForm } from '../../action'
import Input from '../../formComponent/native/Input'
import Radio from '../../formComponent/native/Radio'
import Button from '../../formComponent/native/Button'
import './index.scss'

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(submitWithReduxForm)}>
      <Field
        component={Radio}
        name="gender"
        label="Gender"
        items={[{ value: '1', label: 'Female' }, { value: '2', label: 'Male' }]}
      />
      <Field component={Input} name="name" label="name" type="name" />
      <Field
        component={Input}
        name="password"
        label="password"
        type="password"
      />
      <Field component={Button} type="submit" text="Submit" />
    </form>
  )
}

export default reduxForm({ form: 'someForm', selfValidation })(Form)
