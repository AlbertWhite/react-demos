export const ActionTypes = {
  ADD: 'ADD',
  SUBSTRACT: 'SUBSTRACT',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return ++state
    case ActionTypes.SUBSTRACT:
      return --state
    default:
      return state
  }
}
