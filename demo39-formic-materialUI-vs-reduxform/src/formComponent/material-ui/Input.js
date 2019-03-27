import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './index.module.css'

const Input = props => {
  const { name, errors, label } = props
  return (
    <>
      <TextField
        name={name}
        value={props.values[name]}
        onChange={props.handleChange}
        label={label}
        InputProps={{
          classes: {
            root: styles.textRoot
          }
        }}
      />
      {errors[name] && <div className={styles.error}>{errors[name]}</div>}
    </>
  )
}

export default Input
