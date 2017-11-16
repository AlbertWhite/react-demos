const filterReducer = (state="all", action) => {
	switch(action.type){
		case "CHANGEFILTER":
			return action.filter
		default: 
			return state
	}
}

export default filterReducer