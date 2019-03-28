import React from 'react'
import styles from './index.module.css'

const Input = props => {
  const { label, type, meta, name, input } = props
  const { touched, error, warning } = meta

  return (
    <div className="input__container">
      <label htmlFor="id">{label}</label>
      <input {...input} type={type} />
      {touched && (error && <div className={styles.error}>{error}</div>)}
    </div>
  )
}

export default Input
