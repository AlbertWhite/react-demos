import React from 'react'

import CartContainer from '../containers/CartContainer'
import ProductsContainer from '../containers/ProductsContainer'

const App = () => {
	return(
		<div>
			<ProductsContainer></ProductsContainer>
			<CartContainer></CartContainer>
		</div>
	)
}

export default App