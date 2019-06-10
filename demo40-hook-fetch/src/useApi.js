/**
 * https://reactjs.org/docs/hooks-custom.html
 * Customize hook
 *
 */
import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'

/**
 * In the customize hook useApi, we return data and callBack function to setUrl
 *
 */

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    default:
      throw new Error()
  }
}

export const useApi = baseUrl => {
  const [url, setUrl] = useState(`${baseUrl}=redux`)

  const [state, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: []
  })

  useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        const result = await axios(url)
        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' })
        }
      }
    }
    fetchData()
    return () => {
      didCancel = true // with cleanup. clean up function runs when a component un mount
    }
  }, [url]) // if url changes, reuse the useEffect hook.

  return { state, setUrl }
}
