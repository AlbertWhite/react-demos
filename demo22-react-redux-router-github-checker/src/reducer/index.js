const reducer = (state=[], action) => {
	switch(action.type){
		case 'SAVE_REPO':
			return action.repos
		default: return state
	}
}

export default reducer