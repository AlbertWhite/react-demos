import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import "./input.scss"

const onInputChange = (e, formatValue, onChange) => {
  const value = e.target.value
  const formattedValue =
    typeof formatValue !== "undefined" && typeof formatValue === "function"
      ? formatValue(value)
      : value
  onChange(formattedValue)
}

const InputMaterial = props => {
  const {
    autoFocus,
    noLabel,
    formatValue,
    input,
    autocapitalize,
    autocomplete,
    autocorrect,
    max,
    min,
    id,
    label,
    type,
    placeholder,
    icon,
    meta,
    readonly
  } = props
  const { touched, error, warning } = meta
  const GroupClasses = classNames("input", {
    "input--error": touched && error,
    "input--valid": input.value && !error,
    "input--readOnly": readonly && !error,
    "input--warning": touched && warning,
    "input--filled": input.value,
    "input--icon": icon
  })

  return (
    <div className="input__field">
      <div className={GroupClasses}>
        <div className="input__container">
          {(icon &&
            icon.text && <span className="input__icon">{icon.text}</span>) ||
            (icon && <i className={classNames("input__icon", icon)} />)}

          <input
            autoCapitalize={autocapitalize}
            autoComplete={autocomplete}
            autoCorrect={autocorrect}
            autoFocus={autoFocus}
            className="input-material__field"
            {...input}
            id={id}
            maxLength={max}
            minLength={min}
            onChange={e => onInputChange(e, formatValue, input.onChange)}
            placeholder={placeholder}
            readOnly={readonly}
            type={type}
          />
          <label className="input-material__label" htmlFor="id">
            {label}
          </label>
          {touched &&
            ((error && (
              <div className="input--error__label input-material--error__label">
                {error}
              </div>
            )) ||
              (warning && (
                <div className="input--warning__label input-material--warning__label">
                  {warning}
                </div>
              )))}
        </div>
      </div>
    </div>
  )
}

InputMaterial.defaultProps = {
  autoFocus: false
}

InputMaterial.propTypes = {
  autocapitalize: PropTypes.string,
  autocomplete: PropTypes.string,
  autocorrect: PropTypes.string,
  name: PropTypes.string,
  formatValue: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  noLabel: PropTypes.bool,
  readonly: PropTypes.bool,
  input: PropTypes.object,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default InputMaterial
