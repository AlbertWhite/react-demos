import { combineReducers } from 'redux'

import cart from './cart'
import products from './products'

const rootReducer = combineReducers({cart, products})

export default rootReducer