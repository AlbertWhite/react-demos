import React from 'react'

const Input = ({findRepo,history}) => {

	//get current node with an variable
	let input

	return <div>
		<input type="text" ref={(node) => {input=node}}/>
		<button onClick={()=>{history.push(input.value);findRepo(input.value)}}>Find repos</button>
	</div>
}

export default Input