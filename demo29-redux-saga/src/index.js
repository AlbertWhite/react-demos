import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header.js'

const App = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
