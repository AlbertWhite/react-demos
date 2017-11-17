import React from 'react'

const Cart = ({products, total}) => {

	return (
		<div>
			<h1>Your Cart</h1>
			{
				products.map((product)=>{
					return (
						<div key={product.key}>
							{product.title} x {product.quantity}
						</div>
					)
				})
			}
			<span>${total}</span>
		</div>
	)
}

export default Cart