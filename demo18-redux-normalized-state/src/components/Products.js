import React from 'react'

//notice the way to construct the parameter
const Products = ({products, addToCart}) => {
	return (
		<div>
			<h1>Products</h1>
			{
				 products.map((product)=>(
						<div key={product.id}>
							<span>{product.title} - ${product.price} x {product.inventory}</span>
							<button disabled={product.inventory < 1} onClick={() => addToCart(product.id)}>Add to cart</button>
						</div>
				))
			}
		</div>
	)
}

export default Products