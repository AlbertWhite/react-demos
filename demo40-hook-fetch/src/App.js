/**
 * Objects:
 * 1. Search data for every click
 * 2. Fetching indicator with useState 'isFetching'
 * 3. Error indicator with useState 'hasError' and 'error'
 * 4. Wrap the useEffect, useState into a customize hook
 * 5. useReducer to group related data
 */

import React, { Fragment, useState } from 'react'
import { useApi } from './useApi'

function App() {
  const [query, setQuery] = useState('redux')
  const baseUrl = 'http://hn.algolia.com/api/v1/search?query='
  const {
    state: { data, isLoading },
    setUrl
  } = useApi(`${baseUrl}${query}`)
  return (
    <Fragment>
      <form
        onSubmit={e => {
          e.preventDefault() // if we don't add preventDefault, browser will reload after onSubmit
          setUrl(`${baseUrl}${query}`) // setUrl -> change url in useApi hook -> reFetch data
        }}
      >
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits &&
            data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
        </ul>
      )}
    </Fragment>
  )
}

export default App
