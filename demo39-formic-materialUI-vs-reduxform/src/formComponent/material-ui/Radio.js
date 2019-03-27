import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import styles from './index.module.css'

export default props => {
  const { name, items, errors, handleChange } = props

  return (
    <>
      <RadioGroup
        name={name}
        value={props.values[name]}
        onChange={handleChange}
        classes={{
          root: styles.radioGroup
        }}
      >
        {items.map(item => {
          return (
            <FormControlLabel
              value={item.value}
              label={item.label}
              control={<Radio />}
            />
          )
        })}
      </RadioGroup>
      {errors[name] && <div className={styles.error}>{errors[name]}</div>}
    </>
  )
}
