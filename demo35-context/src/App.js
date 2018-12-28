import React from 'react'
import Com from './Com'
import MyContext from './context'

const App = () => {
  return (
    <MyContext.Provider value={{ lan: 'CN' }}>
      <Com />
    </MyContext.Provider>
  )
}

export default App
