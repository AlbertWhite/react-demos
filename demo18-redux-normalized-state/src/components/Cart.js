import React from 'react'

const Cart = ({products}) => {

	return (
		<div>
			<h1>Your Cart</h1>
			{
				products.map((product)=>{
					return (
						<div>
							{product.id}
						</div>
					)
				})
			}
			<button>Checkout</button>
		</div>
	)
}

export default Cart