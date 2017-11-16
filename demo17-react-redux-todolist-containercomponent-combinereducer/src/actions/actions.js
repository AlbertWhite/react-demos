let nextTodoId = 0;

//when actions needs an input, create a function and return an object
export const addTodoAction = (content) => ({type:"ADD", content, id: nextTodoId++})
export const toggleTodoAction = (id) => ({type:"TOGGLE", id})
export const changeFilterAction = (filter) => ({type:"CHANGEFILTER", filter})