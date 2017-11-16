import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = (products) => ({
	type: types.RECEIVE_PRODUCTS,
	products
})

export const getAllProducts = () => (
	(dispatch) => {
	  shop.getProducts(products => {
	  	dispatch(receiveProducts(products))
	  })
	}
)