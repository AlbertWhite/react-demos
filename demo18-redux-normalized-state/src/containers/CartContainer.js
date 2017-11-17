//products: state.cart.products.products


import React from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

const mapStateToProps = (state) => {
	return {
		products: state.cart.products
	}
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer