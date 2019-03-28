import React from 'react'
import './index.scss'

export default ({ type, text }) => (
  <button type={type || 'button'}>{text}</button>
)
