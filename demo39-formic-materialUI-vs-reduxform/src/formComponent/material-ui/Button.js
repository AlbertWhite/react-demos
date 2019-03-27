import React from 'react'
import Button from '@material-ui/core/Button'
import styles from './index.module.css'

export default ({ label, type, disabled }) => {
  return (
    <Button
      classes={{
        root: styles.button
      }}
      variant="outlined"
      color="primary"
      type={type}
      disabled={disabled}
    >
      {label}
    </Button>
  )
}
