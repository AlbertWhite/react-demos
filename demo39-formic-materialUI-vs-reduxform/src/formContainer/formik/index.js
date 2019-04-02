import React from 'react'
import { Formik } from 'formik'
import Input from '../../formComponent/material-ui/Input'
import Radio from '../../formComponent/material-ui/Radio'
import Button from '../../formComponent/material-ui/Button'
import YupSchema from '../../validation/yupSchema'
import { submitWithFormik } from '../../action'
import './index.scss'

const Form = props => {
  return (
    <Formik
      initialValues={{}}
      validationSchema={YupSchema}
      validateOnChange={false}
      onSubmit={(values, { setSubmitting, setErrors }) => {
        props.dispatch(submitWithFormik({ values, setSubmitting, setErrors }))
      }}
    >
      {({ errors, handleSubmit, isSubmitting, ...formikProps }) => {
        return (
          <form onSubmit={handleSubmit}>
            <h3>formik + material-ui</h3>
            <Radio
              name="gender"
              items={[
                { value: '1', label: 'Female' },
                { value: '2', label: 'Male' }
              ]}
              errors={errors}
              {...formikProps}
            />
            <Input name="name" label="Name" errors={errors} {...formikProps} />
            <Input
              name="password"
              label="password"
              type="password"
              errors={errors}
              {...formikProps}
            />
            <Button
              label="Sign up"
              type="submit"
              errors={errors}
              disabled={isSubmitting}
              {...formikProps}
            />
            {errors.general && <div className="error">{errors.general}</div>}
          </form>
        )
      }}
    </Formik>
  )
}
export default Form
