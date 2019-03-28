import React from 'react'
import './index.scss'

const Input = props => {
  const { label, type, meta, name, input } = props
  const { touched, error, warning } = meta

  return (
    <div>
      <label htmlFor="id">{label}</label>
      <input {...input} type={type} />
      {touched && (error && <div className="error">{error}</div>)}
    </div>
  )
}

export default Input
