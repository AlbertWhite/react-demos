import React from 'react'

import Addtodo from '../containers/Addtodo'
import TodoListContainer from '../containers/TodoListContainer'
import FilterContainer from '../containers/FilterContainer'

import "../App.css"

const App = () => (
	<div>
		<Addtodo />
		<FilterContainer />
		<TodoListContainer />
	</div>
)

export default App;