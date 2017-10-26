//an example for reducer

const ADD_USER = "ADD_USER"
const DELETE_USER = "DELETE_USER"
const UPDATE_USER = "UPDATE_USER"

const usersReducer =(state=[],action)=>{
  switch(action.type){
    case ADD_USER:
      return [...state,action.user]//add new element
    case DELETE_USER:
      return[...state.slice(0,action.index),...state.slice(action.index+1)]//get rid of the element with index
    case UPDATE_USER:
      return [...state.map((user, index) => {
        if (index === action.index) {
          return {...user, ...action.user} //update element
        } else {
          return user
        }
      })]
    default:
      return state
  }

}
