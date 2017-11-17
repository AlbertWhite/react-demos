export const productsFetched = (products) => ({
	type: 'PRODUCTS_FETCHED',
	products
})


export const fetchProducts = (url) => (
	(dispatch) => {
		fetch(url)
			.then((response)=>{
				return response.json()
			})
			.then((response) => dispatch(productsFetched(response)))

	}
)

export const addToCart = (id) => {
	return {
		"type": "ADD_TO_CART",
		id
	}
}