import React from 'react';
import TodoList from '../components/TodoList'
import { toggleTodoAction } from '../actions/actions.js'
import { connect } from 'react-redux';


const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos
    case 'done':
      return todos.filter(t => t.done)
    case 'notdone':
      return todos.filter(t => !t.done)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


const mapStatusToProps = (status) => {
	return{
		todos: filterTodos(status.todos, status.filter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		toggleTodo: dispatch(toggleTodoAction)
	}
}

//connect is just for sending the parameters
const TodoListContainer = connect(mapStatusToProps)(TodoList)
export default TodoListContainer;