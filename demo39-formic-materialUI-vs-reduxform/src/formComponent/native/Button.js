import React from 'react'

export default ({ type, text }) => (
  <button type={type || 'button'}>{text}</button>
)
