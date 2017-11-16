const itemErrorReducer = (state = false, action) => {
	switch (action.type){
		case 'ITEM_HAS_ERROR':
			return action.hasError

		default:
			return state
	}
}

export default itemErrorReducer