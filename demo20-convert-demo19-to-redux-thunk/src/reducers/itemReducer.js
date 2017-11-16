const itemReducer = (state = [], action) => {
	switch (action.type){
		case 'ITEM_FETCHED':
			return action.items
		default:
			return state
	}
}

export default itemReducer