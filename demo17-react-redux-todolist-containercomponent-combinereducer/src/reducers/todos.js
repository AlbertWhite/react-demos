const todoReducer = (state=[], action) => {
	switch(action.type){
		case "ADD":
			return state;
		case "Toggle":
			return state;
		default:
			return state;
	}
}


export default todoReducer;