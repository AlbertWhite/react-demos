import React, { Component } from 'react'
import { article } from './schema/article'
import { normalize } from 'normalizr'

class App extends Component {
  render() {
    const originalData = {
      id: '123',
      author: {
        id: '1',
        name: 'Paul'
      },
      title: 'My awesome blog post',
      comments: [
        {
          id: '324',
          commenter: {
            id: '2',
            name: 'Nicole'
          }
        }
      ]
    }

    const normalizedData = normalize(originalData, article)

    console.log('normalizedData', normalizedData)

    return <div className="App" />
  }
}

export default App
