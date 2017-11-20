const reducer = (state={result:0}, action)=>{
	switch(action.type){
		case "ADD":
			let newResult = state.result + action.number
			return {result: newResult}

		default:
			return state
	}
}

export default reducer