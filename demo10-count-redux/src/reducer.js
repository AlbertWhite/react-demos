const Reducer  = (state = {value: 0}, action) => { //reducer input is always state(with initial state) and action

  switch (action.type){
    case "ADD": return {value: state.value+1};
    default: return state;
  }
}

export default Reducer
