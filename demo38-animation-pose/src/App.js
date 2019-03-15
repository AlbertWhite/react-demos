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
      visible: {
        // define animation states
        opacity: 1,
        scaleY: 1,
        transition: {
          // every animation state has a transition property
          // transition: how animation is made

          // some properties : https://popmotion.io/pose/learn/custom-transitions/#custom-transitions-basic-usage

          // types: tween (default) / decay / keyframes
          // ease: the speed changes over the animation
          // delay: the delay of an animation
          opacity: { ease: 'easeOut', duration: 300 }, // it is possible to define multiple transitions
          default: { ease: 'linear', duration: 300 }
        }
      },
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
