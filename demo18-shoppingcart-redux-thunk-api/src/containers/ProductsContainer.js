import React from 'react'
import { connect } from 'react-redux'
import Products from '../components/Cart'

const ProductsContainer = connect()(Products)

export default ProductsContainer