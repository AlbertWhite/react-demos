import React, { Component } from 'react'
import posed from 'react-pose' // use 'posed' to create animated elements
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible })
    }, 1000)
  }

  render() {
    const Box = posed.div({
      visible: { opacity: 1 }, // define animation states
      hidden: { opacity: 0 }
    })

    return (
      <div className="App">
        <Box
          className="box"
          pose={this.state.isVisible ? 'visible' : 'hidden'} // in the pose props, we pass the animation state
        />
      </div>
    )
  }
}

export default App
