import React from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'

const CartContainer = connect()(Cart)

export default CartContainer