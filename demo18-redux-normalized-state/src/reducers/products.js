const products = (state = {productList:[], byId:{}}, action) => {
	switch(action.type){
		case 'PRODUCTS_FETCHED':
				
			let byId = {}
			//create an object byId
			action.products.map((product)=>{
				byId[product.id]= product
			})

			return {productList: action.products, byId: byId}
		case 'ADD_TO_CART':
			let newProductList = state.productList.map((product)=>{
				if(product.id === action.id){
					product.inventory--
				}
				return product
			})
			return {...state, productList: newProductList}

		default: return state
	}
}

//write interface for containers(with connect it has the full state) to retrieve the data
export const getProductById = (state, id) => {
	return state.products.byId[id]
}

export default products