import React from 'react'
import { connect } from 'react-redux'
import Products from '../components/Products'
import { addToCart } from '../actions'

const mapStateToProps = (state) => {
	return {
		products: state.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addToCart: (id) => (
			dispatch(addToCart(id))
		)
	}
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)


export default ProductsContainer