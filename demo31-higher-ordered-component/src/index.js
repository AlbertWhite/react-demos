import React from 'react'
import ReactDOM from 'react-dom'

const Child = () => (
  <h1>'higher ordered component'</h1>
)

const Transformer = (props) => {
  const component = props.condition ? props.children : null
  return component
}

const App = () => {
  return (
    <div>
      <Transformer condition={true}>
        <Child />
      </Transformer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
