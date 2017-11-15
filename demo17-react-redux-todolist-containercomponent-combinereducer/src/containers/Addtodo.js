import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/actions.js'

//pass props into function react component
let Addtodo = ({addTodo}) => {
	let input;
	return(
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				addTodo(input.value)
			}}>
				<input type="text" ref={(node) => {
					//get html element with ref
					input = node
					}}/>
				<button type="submit">
					Add todo
				</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	//remember to return an object
	return{
		addTodo: (content) => {dispatch(addTodoAction(content))}
	}
}

Addtodo = connect(null, mapDispatchToProps)(Addtodo);

export default Addtodo;
