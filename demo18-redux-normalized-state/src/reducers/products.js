const products = (state = [], action) => {
	switch(action.type){
		case 'PRODUCTS_FETCHED':
			return action.products
		case 'ADD_TO_CART':
			let newState = state.map((product)=>{
				if(product.id === action.id){
					product.inventory--
				}
				return product
			})
			return newState

		default: return state
	}
}

export default products