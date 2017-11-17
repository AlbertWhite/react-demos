import React from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

import { getProductById } from '../reducers/products'
import { countTotal } from '../reducers/cart' 

const mapStateToProps = (state) => {

	let productsInCart = state.cart.products
	productsInCart = productsInCart.map((product)=>{
		let id = product.id
		let productInfo = getProductById(state, id)
		product.title = productInfo.title
	})

	return {
		total: countTotal(state),
		products: state.cart.products
	}
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer