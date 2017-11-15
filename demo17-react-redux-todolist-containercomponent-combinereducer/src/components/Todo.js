import React from 'react';

const Todo = ({todo, toggleTodo}) => {
	return(
		<div onClick={toggleTodo}>{todo.content}</div>
	)
}

export default Todo;
