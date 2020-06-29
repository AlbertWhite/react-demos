import React from 'react'
import { useUIState } from './UIContext'

export const Number = () => {
  const state = useUIState()
  return <>{state}</>
}
