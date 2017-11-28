export default function counter(state = {number: 0, items: []}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {number: state.number + 1, item: []}
    case 'DECREMENT':
      return {number: state.number - 1, item: []}
    case 'UPDATE_ITEMS':
      return {number: state.number, items: action.items}
    default: 
      return state
  }
}