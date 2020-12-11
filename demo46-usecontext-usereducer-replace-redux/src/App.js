import React from 'react'
import { ContextProvider } from './UIContext'
import { Button } from './Button'
import { Number } from './Number'
import './App.css'

function App() {
  return (
    <ContextProvider>
      <>
        <Number />
        <Button />
      </>
    </ContextProvider>
  )
}

export default App
