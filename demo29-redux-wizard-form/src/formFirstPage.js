import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './validate';
import renderField from './renderField';

let FormFirstPage = props => {
  const {handleSubmit} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  )
}

FormFirstPage = reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormFirstPage)

export default FormFirstPage