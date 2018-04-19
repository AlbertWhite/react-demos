import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import Input from "./shared/input"
import signinSubmit from "../services/signin"

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = "No Email"
  }

  if (!values.password) {
    errors.password = "No Password"
  }

  return errors
}

const Signin = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit(signinSubmit)}>
        <Field component={Input} name="email" type="text" label="E-mail" />
        <Field
          component={Input}
          name="password"
          type="password"
          label="Password"
        />
        <button type="submit">Sign in</button>
      </form>
    </React.Fragment>
  )
}

const SigninForm = reduxForm({ form: "signin", validate })(Signin)

export default SigninForm
