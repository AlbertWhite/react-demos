import React, { Component } from 'react'
import { article } from './schema/article'
import { normalize, denormalize } from 'normalizr'

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
    //normalizedData
    // {
    //   entities : {
    //     users: {
    //       1:
    //       2:
    //     },
    //     comments:{

    //     },
    //     articles:{

    //   }
    // }

    const deNormalizedData = denormalize(
      normalizedData.result, //result : id the root entity
      article, //article schema : root schema
      normalizedData.entities
    )
    console.log('denormalizedData', deNormalizedData)

    return <div className="App" />
  }
}

export default App
