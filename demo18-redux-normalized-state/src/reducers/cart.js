const cart = (state = {products:[], ids:[]}, action) => {
	switch(action.type){
		case 'ADD_TO_CART':
			//use object.assign to deep copy. but only can deep copy the first layer object
			let newState = Object.assign({}, state)
			if(newState.ids.indexOf(action.id) === -1){
				//use concat but not push to add into array, or cause the same problem for changing the original object
				newState.products = newState.products.concat([{id: action.id, quantity: 1}])
				newState.ids = newState.ids.concat([action.id])
			}else{

			}
			//before return new state, need to determine the old state is changed or not.
			return newState

		default: return state
	}
}

export default cart