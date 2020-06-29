import React from 'react'
import { reducer, ActionTypes } from './reducer'

const initialContext = 0

const StateContext = React.createContext(initialContext)
const DispatchContext = React.createContext(undefined)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext)
  console.log('ax', { dispatch })
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export const useUIState = () => {
  return React.useContext(StateContext)
}

export const useUIDispatch = () => {
  const dispatch = React.useContext(DispatchContext)

  if (dispatch === undefined) {
    throw new Error('useBookingDispatch must be used within a BookingProvider')
  }

  console.warn('ax', dispatch)

  const add = React.useCallback(() => {
    dispatch({ type: ActionTypes.ADD })
  }, [dispatch])

  const substract = React.useCallback(() => {
    dispatch({ type: ActionTypes.SUBSTRACT })
  }, [dispatch])

  return React.useMemo(
    () => ({
      add,
      substract,
    }),
    [dispatch]
  )
}
