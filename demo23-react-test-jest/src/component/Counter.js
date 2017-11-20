import React from 'react'
import { connect } from 'react-redux'
import { add } from '../action'

let Counter = ({addValue}) => {
	let input
	return(
		<div>
			<input type="text" ref={(node)=>{input = node}} placeholder="input value"/>
			<button onClick={()=>{ 
				addValue(parseInt(input.value))
				input.value=0}}>Add value
			</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return{
		addValue: (value) => {dispatch(add(value))}
	}
}

Counter = connect(null, mapDispatchToProps)(Counter)
export default Counter