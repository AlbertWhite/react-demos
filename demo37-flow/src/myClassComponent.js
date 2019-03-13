// @flow

/*
When using Flow + React in ES6, it is recommended to import React as a namespace, i.e.
import * as React from 'react'
https://github.com/babel/babel/issues/7589
*/
import React, { Component } from 'react'

type Props = {
  firstName: string,
  lastName: string
}

export default class extends Component<Props> {
  render() {
    const { firstName, lastName } = this.props
    return <div>{`${firstName} ${lastName}`}</div>
  }
}
