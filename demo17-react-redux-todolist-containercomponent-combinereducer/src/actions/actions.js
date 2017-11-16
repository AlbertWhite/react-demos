let nextTodoId = 0;

//when actions needs an input, create a function and return an object
export const addTodoAction = (content) => ({
	type:"ADD", 
	content, id: 
	nextTodoId++
})

//formating the long object
export const toggleTodoAction = (id) => ({
	type:"TOGGLE", //it is obligated to have type field in an action
	id
})

export const changeFilterAction = (filter) => ({
	type:"CHANGEFILTER", 
	filter
})