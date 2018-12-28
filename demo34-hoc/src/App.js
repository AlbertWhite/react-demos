import React, { Component } from 'react'
import { Text } from './Text'

const HOC = (Text, text) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        revertedString: text
      }
    }

    componentWillMount() {
      const revertedString = text
        .split('')
        .reverse()
        .join('')

        .split()
      this.setState({ revertedString: revertedString })
    }

    render() {
      return <Text text={this.state.revertedString} />
    }
  }
}

const App = HOC(Text, 'hello world')

export default App
