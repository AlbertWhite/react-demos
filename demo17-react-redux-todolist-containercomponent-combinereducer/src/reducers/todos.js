const todoReducer = (state=[], action) => {
	switch(action.type){
		case "ADD":
			return [...state, {content: action.content, done: false}];
		case "TOGGLE":
			return state.map(todo =>
				(todo.id === action.id) ? {...todo, done: true} : todo
			);
		default:
			return state;
	}
}


export default todoReducer;