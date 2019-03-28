import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Radio = props => {
  const { items, id, input, meta } = props
  const { touched, error, warning } = meta

  const value = input.value

  return (
    <div>
      {items &&
        items.map((item, index) => {
          const id = index
          return (
            <div key={index} className="radio">
              <input
                {...input}
                checked={value.toString() === item.value.toString()}
                className="radio__input"
                name={input.name}
                type="radio"
                value={item.value}
                id={id}
              />

              <label className="radio__label" htmlFor={id}>
                {item.label}
              </label>
            </div>
          )
        })}

      {touched &&
        (error && <span className="input--error__label">{error}</span>)}
    </div>
  )
}
export default Radio
