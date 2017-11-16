import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
	return (
		<div>
			{
				todos.map((todo)=>{
					//remember to return a value in map
					return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}></Todo>
				})
			}
		</div>
	)
}

export default TodoList;