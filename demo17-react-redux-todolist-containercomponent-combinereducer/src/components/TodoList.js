import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
	return (
		<div>
			{
				todos.map((todo, index)=>{
					//remember to return a value in map
					return <Todo key={index} todo={todo} toggleTodo={toggleTodo}></Todo>
				})
			}
		</div>
	)
}

export default TodoList;