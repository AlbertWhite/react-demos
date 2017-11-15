import React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux';

const mapStatusToProps = (status) => {
	return{
		todos: status.todos
	}
}

const TodoListContainer = connect(mapStatusToProps)(TodoList)
export default TodoListContainer;