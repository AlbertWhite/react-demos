import reducer from './index'
//test with reducer

describe('reducer', ()=>{
	
	const initialState = {result:0}

	it("should handle initial state",()=>{
		expect(
			reducer(initialState,{})
		).toEqual(initialState)
		
	})

	it("should handle ADD", ()=>{
		expect(reducer(
			initialState, 
			{type:'ADD', number:100})
		).toEqual(
		{result: 100}
		)
	})
})