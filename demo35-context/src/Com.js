import React from 'react'
import MyContext from './context'

class Com extends React.Component {
  render() {
    //use context by this.context
    return <div>{this.context.lan}</div>
  }
}

Com.contextType = MyContext //indicate the nearest context

export default Com
