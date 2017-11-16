const todoReducer = (state=[], action) => {
	switch(action.type){
		case "ADD":
			let newState1 = [...state, {content: action.content, done: false, id: action.id}]
			return newState1
		case "TOGGLE":
			let newState = state.map(todo =>
				(todo.id === action.id) ? {...todo, done: true} : todo
			)
			return newState
		default:
			return state
	}
}


export default todoReducer